"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingInterceptor = exports.PreventMutationsInterceptor = exports.ResponseParsingInterceptor = exports.ExceptionInterceptor = exports.MetadataInterceptor = void 0;
const grpc_1 = __importDefault(require("grpc"));
const logger_1 = require("./logger");
const types_1 = require("./types");
const utils_1 = require("./utils");
const FAILURE_KEY = "google.ads.googleads.v4.errors.googleadsfailure-bin";
const REQUEST_ID_KEY = "request-id";
const RETRY_STATUS_CODES = [grpc_1.default.status.INTERNAL, grpc_1.default.status.RESOURCE_EXHAUSTED];
class MetadataInterceptor {
    constructor(developer_token, login_customer_id, linked_customer_id, access_token, auth) {
        this.developer_token = developer_token;
        this.login_customer_id = login_customer_id;
        this.linked_customer_id = linked_customer_id;
        this.access_token = access_token;
        this.auth = auth;
        this.requestInterceptor = this.buildRequester();
    }
    intercept(options, nextCall) {
        return new grpc_1.default.InterceptingCall(nextCall(options), this.requestInterceptor);
    }
    buildRequester() {
        return new grpc_1.default.RequesterBuilder()
            .withStart(async (metadata, listener, next) => {
            const access_token = this.auth ? await this.auth.getAccessToken() : this.access_token;
            metadata.add(`Authorization`, `Bearer ${access_token}`);
            metadata.add(`developer-token`, this.developer_token);
            if (this.login_customer_id) {
                metadata.add(`login-customer-id`, this.login_customer_id);
            }
            if (this.linked_customer_id) {
                metadata.add(`linked-customer-id`, this.linked_customer_id);
            }
            next(metadata, listener);
        })
            .build();
    }
}
exports.MetadataInterceptor = MetadataInterceptor;
class ExceptionInterceptor {
    constructor() {
        this.requestInterceptor = this.buildRequester();
    }
    intercept(options, nextCall) {
        return new grpc_1.default.InterceptingCall(nextCall(options), this.requestInterceptor);
    }
    handleGrpcFailure(status) {
        var _a, _b, _c, _d;
        const { code, metadata } = status;
        if (RETRY_STATUS_CODES.includes(code)) {
            /* Throw error if code one of INTERNAL or RESOURCE_EXHAUSTED */
            return new Error(status.details);
        }
        const gaFailure = this.getGoogleAdsFailure(metadata);
        if (!gaFailure) {
            /* Throw error with status details if not a Google Ads API error */
            return new Error(status.details);
        }
        const requestId = this.getRequestId(metadata);
        let error;
        const errorsList = gaFailure.getErrorsList();
        if (errorsList && errorsList.length > 0) {
            const firstError = errorsList[0];
            const firstErrorObj = firstError.toObject();
            let path = "";
            if (firstErrorObj.hasOwnProperty("location")) {
                path = utils_1.getErrorLocationPath(firstErrorObj.location);
            }
            return new ClientError(firstErrorObj.message, requestId, gaFailure, path, (_c = (_b = (_a = firstErrorObj.details) === null || _a === void 0 ? void 0 : _a.policyFindingDetails) === null || _b === void 0 ? void 0 : _b.policyTopicEntriesList) !== null && _c !== void 0 ? _c : (_d = firstErrorObj.details) === null || _d === void 0 ? void 0 : _d.policyViolationDetails);
        }
        try {
            /* Try to parse the error */
            const errorPieces = gaFailure.toString().split(",");
            const errorMessage = errorPieces[errorPieces.length - 1];
            error = new ClientError(errorMessage, requestId, gaFailure);
        }
        catch (err) {
            /* Use the original error message if parsing fails */
            error = new ClientError(status.details, requestId, gaFailure);
        }
        return error;
    }
    buildRequester() {
        return new grpc_1.default.RequesterBuilder()
            .withStart((metadata, _listener, next) => {
            const newListener = this.buildListener();
            next(metadata, newListener);
        })
            .build();
    }
    buildListener() {
        return new grpc_1.default.ListenerBuilder()
            .withOnReceiveStatus((status, next) => {
            var _a;
            if (status.code !== grpc_1.default.status.OK) {
                // TODO: Throw this error instead of returning a new status?
                const error = this.handleGrpcFailure(status);
                if (error.hasOwnProperty("error_code")) {
                    // @ts-ignore Custom error field "error_code"
                    status.metadata.add("error-code", JSON.stringify(error.error_code));
                }
                if (error.hasOwnProperty("location")) {
                    // @ts-ignore Custom error field "location"
                    status.metadata.add("location", error.location);
                }
                if (error.hasOwnProperty("policy_violation_details") &&
                    typeof ((_a = error) === null || _a === void 0 ? void 0 : _a.policy_violation_details) !== "undefined") {
                    status.metadata.add("policy-violation-details-bin", 
                    // @ts-ignore Custom error field "policy_violation_details"
                    Buffer.from(JSON.stringify(error.policy_violation_details)));
                }
                const errorStatus = new grpc_1.default.StatusBuilder()
                    .withCode(status.code)
                    .withDetails(error.message)
                    .withMetadata(status.metadata)
                    .build();
                next(errorStatus);
            }
            else {
                next(status);
            }
        })
            .build();
    }
    getGoogleAdsFailure(metadata) {
        if (!metadata) {
            return null;
        }
        for (const key in metadata.getMap()) {
            if (key === FAILURE_KEY) {
                const message = metadata.get(key);
                try {
                    const failure = types_1.GoogleAdsFailure.deserializeBinary(message[0]);
                    return failure;
                }
                catch (err) {
                    return null;
                }
            }
        }
        return null;
    }
    getRequestId(metadata) {
        if (metadata.get(REQUEST_ID_KEY)) {
            return metadata.get(REQUEST_ID_KEY)[0];
        }
        return "";
    }
}
exports.ExceptionInterceptor = ExceptionInterceptor;
class ResponseParsingInterceptor {
    constructor() {
        this.requestInterceptor = this.buildRequester();
    }
    intercept(options, nextCall) {
        return new grpc_1.default.InterceptingCall(nextCall(options), this.requestInterceptor);
    }
    buildRequester() {
        return new grpc_1.default.RequesterBuilder()
            .withStart((metadata, _listener, next) => {
            const newListener = this.buildListener();
            next(metadata, newListener);
        })
            .build();
    }
    buildListener() {
        return new grpc_1.default.ListenerBuilder()
            .withOnReceiveStatus((status, next) => {
            next(status);
        })
            .withOnReceiveMessage((message, next) => {
            var _a;
            if (message && message.toObject) {
                let results = message.toObject();
                if (results.partialFailureError && results.partialFailureError.detailsList) {
                    const errors = [];
                    const failure = types_1.GoogleAdsFailure.deserializeBinary(results.partialFailureError.detailsList[0].value);
                    const errorsList = failure.getErrorsList();
                    for (const error of errorsList) {
                        errors.push(error.toObject());
                    }
                    // detailsList -> details
                    if (results.partialFailureError.detailsList) {
                        results.partialFailureError.details = results.partialFailureError.detailsList;
                        delete results.partialFailureError.detailsList;
                    }
                    // @ts-ignore Errors is similar to GoogleAdsRow type
                    results.partialFailureError.errors = utils_1.formatCallResults(errors, {
                        pathsList: ["error_code", "message", "trigger", "location", "details"],
                    });
                    // mutateOperationResponsesList -> mutateOperationResponses
                    if (results.mutateOperationResponsesList) {
                        results.mutateOperationResponses = results.mutateOperationResponsesList;
                        delete results.mutateOperationResponsesList;
                    }
                }
                /*
                    When retrieving a single entity via a service (e.g. CampaignService), the API
                    returns a single object, instead of an array
                */
                const results_to_parse = results.resultsList ? results.resultsList : [results];
                if ((results_to_parse === null || results_to_parse === void 0 ? void 0 : results_to_parse.length) > 0) {
                    const fieldMask = (_a = results.fieldMask) !== null && _a !== void 0 ? _a : utils_1.getFieldMask(results_to_parse[0]).toObject();
                    const parsedResults = utils_1.formatCallResults(results_to_parse, fieldMask);
                    if (parsedResults && results.resultsList) {
                        results.resultsList = parsedResults;
                    }
                    /* Return an object if it's a single entity via a service */
                    if (!results.partialFailureError && parsedResults && !results.resultsList) {
                        results = parsedResults[0];
                    }
                }
                // Parse the summary row if it exists
                if (results.summaryRow && typeof results.summaryRow !== "undefined") {
                    const parsedSummaryRow = utils_1.formatCallResults([results.summaryRow], results.fieldMask);
                    if (parsedSummaryRow && parsedSummaryRow.length >= 0) {
                        results.summaryRow = parsedSummaryRow[0];
                    }
                }
                next(results);
            }
            else {
                next(message);
            }
        })
            .build();
    }
}
exports.ResponseParsingInterceptor = ResponseParsingInterceptor;
class PreventMutationsInterceptor {
    constructor() {
        this.requestInterceptor = this.buildRequester();
        this.blankInterceptor = buildBlankInterceptor();
    }
    intercept(options, nextCall) {
        if (utils_1.isMutationRequest(options)) {
            return new grpc_1.default.InterceptingCall(nextCall(options), this.requestInterceptor);
        }
        return new grpc_1.default.InterceptingCall(nextCall(options), this.blankInterceptor);
    }
    buildRequester() {
        return new grpc_1.default.RequesterBuilder()
            .withSendMessage((message, next) => {
            utils_1.safeguardMutationProtobufRequest(message, next);
        })
            .build();
    }
}
exports.PreventMutationsInterceptor = PreventMutationsInterceptor;
class LoggingInterceptor {
    constructor(options) {
        this.requestInterceptor = this.buildRequester();
        this.responseListener = this.buildListener();
        this.logger = new logger_1.Logger(options);
    }
    intercept(options, nextCall) {
        const method = options.method_definition.path;
        this.logger.setRequestMethod(method);
        if (utils_1.isMutationRequest(options)) {
            this.logger.setRequestIsMutation();
        }
        return new grpc_1.default.InterceptingCall(nextCall(options), this.requestInterceptor);
    }
    buildRequester() {
        return new grpc_1.default.RequesterBuilder()
            .withStart((metadata, _listener, next) => {
            const md = metadata.getMap();
            this.logger.setRequestHeaders(md);
            next(metadata, this.responseListener);
        })
            .withSendMessage((message, next) => {
            const request = message.toObject();
            this.logger.setRequestBody(request);
            this.logger.setStartTs();
            next(message);
        })
            .build();
    }
    buildListener() {
        return new grpc_1.default.ListenerBuilder()
            .withOnReceiveMetadata((metadata, next) => {
            const md = metadata.getMap();
            this.logger.setResponseHeaders(md);
            next(metadata);
        })
            .withOnReceiveMessage((message, next) => {
            if (message === null || message === void 0 ? void 0 : message.toObject) {
                const response = message.toObject();
                this.logger.setResponseBody(response);
            }
            next(message);
        })
            .withOnReceiveStatus((status, next) => {
            this.logger.setEndTs();
            if ((status === null || status === void 0 ? void 0 : status.code) !== grpc_1.default.status.OK) {
                const errorInterceptor = new ExceptionInterceptor();
                const error = errorInterceptor.handleGrpcFailure(status);
                this.logger.setResponseStatus(error.stack);
            }
            else {
                this.logger.setResponseStatus(status);
            }
            this.logger.log();
            next(status);
        })
            .build();
    }
}
exports.LoggingInterceptor = LoggingInterceptor;
class ClientError extends Error {
    constructor(message, requestId, failure, path, policyViolationDetails) {
        super(message);
        this.message = message;
        this.location = path || "";
        this.request_id = requestId;
        this.failure = failure;
        this.policy_violation_details = policyViolationDetails;
        if (failure.getErrorsList() && failure.getErrorsList().length > 0) {
            const errorCode = failure.getErrorsList()[0].getErrorCode();
            this.error_code = errorCode.toObject();
        }
        else {
            this.error_code = {};
        }
    }
}
function buildBlankInterceptor() {
    return new grpc_1.default.RequesterBuilder().build();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2ludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdEQUF3QjtBQUd4QixxQ0FBOEM7QUFDOUMsbUNBTWlCO0FBQ2pCLG1DQU1pQjtBQUVqQixNQUFNLFdBQVcsR0FBRyxxREFBcUQsQ0FBQztBQUMxRSxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUM7QUFDcEMsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLGNBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLGNBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUtsRixNQUFhLG1CQUFtQjtJQVE5QixZQUNFLGVBQXVCLEVBQ3ZCLGlCQUFxQyxFQUNyQyxrQkFBc0MsRUFDdEMsWUFBZ0MsRUFDaEMsSUFBc0I7UUFFdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFTSxTQUFTLENBQUMsT0FBeUIsRUFBRSxRQUFrQjtRQUM1RCxPQUFPLElBQUksY0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRU8sY0FBYztRQUNwQixPQUFPLElBQUksY0FBSSxDQUFDLGdCQUFnQixFQUFFO2FBQy9CLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBdUIsRUFBRSxRQUF1QixFQUFF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