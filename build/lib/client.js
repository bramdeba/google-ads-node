"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAdsClient = void 0;
const cosmiconfig_1 = __importDefault(require("cosmiconfig"));
const grpc_1 = __importDefault(require("grpc"));
const lodash_get_1 = __importDefault(require("lodash.get"));
const auth_1 = __importDefault(require("./auth"));
const interceptor_1 = require("./interceptor");
const services = __importStar(require("./services"));
const GrpcTypes = __importStar(require("./types"));
const utils_1 = require("./utils");
// @ts-ignore
const compiled_resources_js_1 = __importDefault(require("../protos/compiled-resources.js"));
const DEFAULT_VERSION = "v4";
const GOOGLE_ADS_ENDPOINT = "googleads.googleapis.com:443";
const STREAMING_SUPPORTED_SERVICES = ["GoogleAdsService"];
const PROTO_ROOT = `google.ads.googleads.${DEFAULT_VERSION}`;
const allProtos = lodash_get_1.default(compiled_resources_js_1.default, PROTO_ROOT);
class GoogleAdsClient {
    constructor(options) {
        if (typeof options === "string" || typeof options === "undefined") {
            const configPath = options;
            const { config = {} } = this.loadConfig(configPath) || {};
            options = config;
        }
        this.validateOptions(options);
        if (this.usingToken(options)) {
            this.options = options;
        }
        else {
            /* Access token has not been provided */
            this.options = options;
            this.auth = new auth_1.default({
                clientId: this.options.client_id,
                clientSecret: this.options.client_secret,
                refreshToken: this.options.refresh_token,
                accessTokenGetter: this.options.accessTokenGetter,
            });
        }
    }
    getService(serviceName, serviceOptions) {
        const serviceClientName = `${serviceName}Client`;
        if (!services.hasOwnProperty(serviceClientName)) {
            throw new Error(`Specified service "${serviceName}" does not exist in Google Ads API ${DEFAULT_VERSION}.`);
        }
        const interceptors = this.buildInterceptors();
        const serviceClientConstructor = services[serviceClientName];
        const service = new serviceClientConstructor(GOOGLE_ADS_ENDPOINT, grpc_1.default.credentials.createSsl(), {
            interceptors,
            /*
              By default, the maximum size of a gRPC message is 4MB.
              Google Ads results can sometimes be quite big, so 4MB can be insufficient.
              Here, we set it to 1GB to essentially remove that limit.
            */
            "grpc.max_send_message_length": 1024 * 1024 * 1024,
            "grpc.max_receive_message_length": 1024 * 1024 * 1024,
        });
        /* Promisify gRPC service methods (callbacks are kept as well) */
        // This doesn't work with the GoogleAdsService.searchStream method, so optional use is required
        if (!(serviceOptions === null || serviceOptions === void 0 ? void 0 : serviceOptions.useStreaming) && STREAMING_SUPPORTED_SERVICES.includes(serviceName)) {
            utils_1.promisifyServiceClient(service);
        }
        return service;
    }
    buildResource(resource, data) {
        if (!allProtos.resources.hasOwnProperty(resource) &&
            !allProtos.services.hasOwnProperty(resource)) {
            throw new Error(`Specified type "${resource}" does not exist in Google Ads API ${DEFAULT_VERSION}`);
        }
        /* Load the relevant types */
        const type = allProtos.resources[resource] || allProtos.services[resource];
        const grpcType = GrpcTypes[resource];
        /*
          This translates ts values, such as string, to the protobuf format
          e.g. {some_name: "campaign"} -> {someName: { value: "campaign" }}
        */
        const protoFormatData = utils_1.convertToProtoFormat(data, type, resource);
        /* Create a new protobuf Message of the specified type */
        const message = type.fromObject(protoFormatData);
        // TODO: Include debug option that also returns the readable version of the protobuf
        /* Create a readable js object from the protobuf (useful for debugging) */
        // const readable = type.toObject(message, {
        //   enums: String, // enums as string names
        //   longs: String, // longs as strings (requires long.js)
        //   bytes: String, // bytes as base64 encoded strings
        //   defaults: true, // includes default values
        //   arrays: true, // populates empty arrays (repeated fields) even if defaults=false
        //   objects: true, // populates empty objects (map fields) even if defaults=false
        //   oneofs: true, // includes virtual oneof fields set to the present field's name
        // });
        /* Encode the protobuf so it can be translated to the specific gRPC type */
        const encoded = type.encode(message).finish();
        /* Translate the encoded protobuf type to the grpc type */
        const protobuf = grpcType.deserializeBinary(encoded);
        // return { protobuf, readable };
        return protobuf;
    }
    buildInterceptors() {
        const metadataInterceptor = new interceptor_1.MetadataInterceptor(this.options.developer_token, this.options.login_customer_id, this.options.linked_customer_id, this.options.access_token, this.auth);
        const exceptionInterceptor = new interceptor_1.ExceptionInterceptor();
        const responseParsingInterceptor = new interceptor_1.ResponseParsingInterceptor();
        const preventMutationsInterceptor = new interceptor_1.PreventMutationsInterceptor();
        const interceptors = [
            (options, nextCall) => metadataInterceptor.intercept(options, nextCall),
            (options, nextCall) => exceptionInterceptor.intercept(options, nextCall),
        ];
        if (this.options.parseResults) {
            interceptors.push((options, nextCall) => responseParsingInterceptor.intercept(options, nextCall));
        }
        if (this.options.preventMutations) {
            interceptors.push((options, nextCall) => preventMutationsInterceptor.intercept(options, nextCall));
        }
        if (this.options.logging) {
            const loggingInterceptor = new interceptor_1.LoggingInterceptor(this.options.logging);
            interceptors.push((options, nextCall) => loggingInterceptor.intercept(options, nextCall));
        }
        return interceptors;
    }
    loadConfig(configPath) {
        const explorer = cosmiconfig_1.default("googleads");
        if (configPath) {
            return explorer.loadSync(configPath);
        }
        return explorer.searchSync();
    }
    validateOptions(options) {
        if (!options) {
            throw new Error(`Client expects initialisation options`);
        }
        if (!options.developer_token) {
            throw new Error(`Missing required key "developer_token" in options`);
        }
        if (this.usingToken(options) && !options.access_token) {
            throw new Error(`Missing required keys in options, expected "access_token", "developer_token"`);
        }
        if (!this.usingToken(options)) {
            if (!options.client_id ||
                !options.client_secret ||
                !options.refresh_token) {
                throw new Error(`Missing required keys in options, expected "client_id", "client_secret", "refresh_token"`);
            }
        }
    }
    usingToken(options) {
        return "access_token" in options;
    }
}
exports.GoogleAdsClient = GoogleAdsClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUFzQztBQUN0QyxnREFBd0I7QUFDeEIsNERBQTZCO0FBRTdCLGtEQUEwQjtBQUMxQiwrQ0FPdUI7QUFFdkIscURBQXVDO0FBQ3ZDLG1EQUFxQztBQUNyQyxtQ0FBdUU7QUFFdkUsYUFBYTtBQUNiLDRGQUFnRTtBQUVoRSxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUM7QUFDN0IsTUFBTSxtQkFBbUIsR0FBRyw4QkFBOEIsQ0FBQztBQUMzRCxNQUFNLDRCQUE0QixHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUUxRCxNQUFNLFVBQVUsR0FBRyx3QkFBd0IsZUFBZSxFQUFFLENBQUM7QUFDN0QsTUFBTSxTQUFTLEdBQUcsb0JBQUcsQ0FBQywrQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztBQThCckQsTUFBYSxlQUFlO0lBSTFCLFlBQVksT0FBZ0U7UUFDMUUsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQ2pFLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQztZQUMzQixNQUFNLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFELE9BQU8sR0FBRyxNQUF1RCxDQUFDO1NBQ25FO1FBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU5QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFpQyxDQUFDO1NBQ2xEO2FBQU07WUFDTCx3Q0FBd0M7WUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUErQixDQUFD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