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
exports.safeguardMutationProtobufRequest = exports.isMutationRequest = exports.getErrorLocationPath = exports.getFieldMask = exports.convertPathToCamelCase = exports.convertToProtoFormat = exports.formatCallResults = exports.promisifyServiceClient = void 0;
const protobufHelpers = __importStar(require("google-protobuf/google/protobuf/field_mask_pb"));
const lodash_camelcase_1 = __importDefault(require("lodash.camelcase"));
const lodash_get_1 = __importDefault(require("lodash.get"));
const lodash_set_1 = __importDefault(require("lodash.set"));
const structs = __importStar(require("./struct"));
const NON_MUTABLE_METHOD_PREFIXES = ["Get", "List", "Generate", "Search"];
// Based on https://github.com/leaves4j/grpc-promisify/blob/master/src/index.js
function promisifyServiceClient(client) {
    Object.keys(Object.getPrototypeOf(client)).forEach((functionName) => {
        if (functionName.charAt(0) === "$" || functionName.charAt(0) === "_") {
            return;
        }
        const originalFunction = client[functionName];
        client[functionName] = (request, callback) => {
            if (callback && typeof callback === "function") {
                return originalFunction.call(client, request, (error, response) => {
                    callback(error, response);
                });
            }
            return new Promise((resolve, reject) => {
                originalFunction.call(client, request, (error, response) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(response);
                    }
                });
            });
        };
    });
}
exports.promisifyServiceClient = promisifyServiceClient;
function getNestedValue(path, data) {
    var _a;
    const value = (_a = lodash_get_1.default(data, path)) !== null && _a !== void 0 ? _a : lodash_get_1.default(data, `${path}List`);
    const typeOfValue = typeof value;
    if (typeOfValue === "undefined") {
        return value;
    }
    // Return raw values
    if (typeOfValue === "number" || typeOfValue === "string" || typeOfValue === "boolean") {
        return value;
    }
    // Get value from google.protobuf { value } objects
    const isValue = typeOfValue === "object"
        ? value.hasOwnProperty("value") && Object.keys(value).length === 1
        : false;
    if (isValue) {
        return value.value;
    }
    // Recursively get values from arrays
    if (Array.isArray(value)) {
        const childRows = [];
        for (const childRow of value) {
            const newRow = {};
            const childKeys = Object.keys(childRow);
            for (const childKey of childKeys) {
                const newChildVal = getNestedValue(childKey, childRow);
                if (childKey === "value" && childKeys.length === 1) {
                    childRows.push(newChildVal);
                }
                else {
                    newRow[childKey] = newChildVal;
                }
            }
            if (Object.keys(newRow).length !== 0) {
                childRows.push(newRow);
            }
        }
        return childRows;
    }
    // Recursively get values from objects
    const childObj = {};
    for (const childKey in value) {
        if (value.hasOwnProperty(childKey)) {
            const childValue = getNestedValue(childKey, value);
            if (Array.isArray(childValue) && childKey.endsWith("List")) {
                childObj[childKey.replace("List", "")] = childValue;
            }
            else {
                childObj[childKey] = childValue;
            }
        }
    }
    return childObj;
}
function formatCallResults(resultsList, fieldMask) {
    var _a;
    // Hack to check if request is a get call (no entity prefix in fieldmask paths)
    // Required because of weird fieldmask inconsistencies where .value is added to each path
    // and to avoid removing fields actually called "value"
    const isGetRequest = (_a = fieldMask === null || fieldMask === void 0 ? void 0 : fieldMask.pathsList) === null || _a === void 0 ? void 0 : _a.find(p => p === "resourceName");
    const len = resultsList.length;
    const camelCaseFieldMask = fieldMask ? fieldMask.pathsList.map(convertPathToCamelCase) : [];
    const fieldMaskLen = camelCaseFieldMask.length;
    const parsedResults = [];
    for (let i = 0; i < len; i++) {
        const row = resultsList[i];
        const parsedRow = {};
        for (let j = 0; j < fieldMaskLen; j++) {
            const path = camelCaseFieldMask[j];
            const value = getNestedValue(path, row);
            // Get the resource name of the entity
            const entity = path.split(".")[0];
            const resourceNameField = `${entity}.resourceName`;
            const resourceNameExistsOriginal = lodash_get_1.default(row, resourceNameField);
            const resourceNameExists = lodash_get_1.default(parsedRow, resourceNameField);
            // Set the resource name if required
            if (!resourceNameExists && resourceNameExistsOriginal) {
                const resourceName = lodash_get_1.default(row, resourceNameField);
                lodash_set_1.default(parsedRow, resourceNameField, resourceName);
            }
            if (typeof value !== "undefined") {
                lodash_set_1.default(parsedRow, formatPath(path, value, isGetRequest), value);
            }
        }
        parsedResults.push(parsedRow);
    }
    return parsedResults;
}
exports.formatCallResults = formatCallResults;
function formatPath(path, value, isGetRequest) {
    if (isGetRequest && path.endsWith(".value")) {
        return path.split(".value")[0];
    }
    if (path.endsWith("List") && Array.isArray(value)) {
        return path.split("List")[0];
    }
    return path;
}
function convertToProtoFormat(data, type, resource_name, nested_path = "") {
    const pb = {};
    const struct = structs[resource_name];
    if (!struct) {
        throw new Error(`Key "${nested_path.replace(".", "")}" not found in resource "${resource_name}"`);
    }
    for (const key of Object.keys(data)) {
        const displayKey = lodash_camelcase_1.default(key);
        const value = data[key];
        /* Resource names are string values, not a protobuf string instance, so just set the string value */
        if (displayKey === "resourceName") {
            pb[displayKey] = value;
            continue;
        }
        /* Build array of proto values */
        if (Array.isArray(value)) {
            pb[displayKey] = value.map((v) => {
                return unroll(v);
            });
            continue;
        }
        pb[displayKey] = unroll(value);
        function unroll(v) {
            return typeof v === "object"
                ? convertToProtoFormat(v, type, resource_name, `${nested_path}.${key}`)
                : toProtoValueFormat(v, struct, `${nested_path}.${key}`.replace(".", ""));
        }
    }
    return pb;
}
exports.convertToProtoFormat = convertToProtoFormat;
function toProtoValueFormat(value, struct, nested_path) {
    const valueType = lodash_get_1.default(struct, nested_path);
    if (!valueType) {
        throw new Error(`Attempted to set value "${value}" on invalid path "${nested_path}" in resource`);
    }
    if (valueType.startsWith("enum_")) {
        return value;
    }
    return {
        value,
    };
}
/* This is different to lodash.camelCase as it leaves any periods (".") */
function convertPathToCamelCase(str) {
    return str.replace(/([-_][a-z\d])/gi, $1 => {
        return $1
            .toUpperCase()
            .replace("-", "")
            .replace("_", "");
    });
}
exports.convertPathToCamelCase = convertPathToCamelCase;
function recursiveFieldMaskSearch(data) {
    const paths = [];
    for (const key of Object.keys(data)) {
        if (key === "resource_name") {
            continue;
        }
        const value = data[key];
        if (typeof value === "object" && !Array.isArray(value)) {
            const children = recursiveFieldMaskSearch(value);
            for (const child of children) {
                paths.push(`${key}.${child}`);
            }
            continue;
        }
        paths.push(key);
    }
    return paths;
}
function getFieldMask(data) {
    const fieldMask = new protobufHelpers.FieldMask();
    const paths = recursiveFieldMaskSearch(data);
    fieldMask.setPathsList(paths);
    return fieldMask;
}
exports.getFieldMask = getFieldMask;
function getErrorLocationPath(location) {
    if (!location || !location.hasOwnProperty("fieldPathElementsList")) {
        return "";
    }
    if (!Array.isArray(location.fieldPathElementsList) && location.fieldPathElementsList.length < 1) {
        return "";
    }
    const { fieldPathElementsList } = location;
    const paths = fieldPathElementsList.map((field) => {
        let path = field.fieldName;
        if (field.index && field.index.hasOwnProperty("value")) {
            path += `[${field.index.value}]`;
        }
        return path;
    });
    return paths.join(".");
}
exports.getErrorLocationPath = getErrorLocationPath;
function isMutationRequest(interceptMessage) {
    var _a;
    let isMutation = true;
    if ((_a = interceptMessage === null || interceptMessage === void 0 ? void 0 : interceptMessage.method_definition) === null || _a === void 0 ? void 0 : _a.path) {
        const { path } = interceptMessage.method_definition;
        for (const prefix of NON_MUTABLE_METHOD_PREFIXES) {
            if (path.includes(prefix)) {
                isMutation = false;
                break;
            }
        }
    }
    return isMutation;
}
exports.isMutationRequest = isMutationRequest;
function safeguardMutationProtobufRequest(message, next) {
    // Force validation only for requests if the setValidateOnly method exists
    if (message === null || message === void 0 ? void 0 : message.setValidateOnly) {
        message.setValidateOnly(true);
        next(message);
        // If the request doesn't support validateOnly, we attempt to clear the operations list
    }
    else if (message === null || message === void 0 ? void 0 : message.clearOperationsList) {
        message.clearOperationsList();
        next(message);
        // Some request operations are called mutate_operations
    }
    else if (message === null || message === void 0 ? void 0 : message.clearMutateOperationsList) {
        message.clearMutateOperationsList();
        next(message);
    }
    else {
        // Otherwise, we just give up to prevent any unwanted mutations (this throws an error, shouldn't happen)
        throw new Error(`Prevent mutations mode is enabled, but the request couldn't be safeguarded, giving up.`);
    }
}
exports.safeguardMutationProtobufRequest = safeguardMutationProtobufRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrRkFBaUY7QUFFakYsd0VBQXlDO0FBQ3pDLDREQUE2QjtBQUM3Qiw0REFBNkI7QUFHN0Isa0RBQW9DO0FBRXBDLE1BQU0sMkJBQTJCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUUxRSwrRUFBK0U7QUFDL0UsU0FBZ0Isc0JBQXNCLENBQUMsTUFBYztJQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFvQixFQUFFLEVBQUU7UUFDMUUsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUNwRSxPQUFPO1NBQ1I7UUFDRCxNQUFNLGdCQUFnQixHQUFJLE1BQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV0RCxNQUFjLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFZLEVBQUUsUUFBYSxFQUFFLEVBQUU7WUFDOUQsSUFBSSxRQUFRLElBQUksT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFO2dCQUM5QyxPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsS0FBVSxFQUFFLFFBQWEsRUFBRSxFQUFFO29CQUMxRSxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QixDQUFDLENBQUMsQ0FBQzthQUNKO1lBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDckMsZ0JBQWdC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