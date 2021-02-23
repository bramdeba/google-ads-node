import grpc from "grpc";
import Auth from "./auth";
import { LogOptions } from "./logger";
import { GoogleAdsFailure, PolicyTopicEntry, PolicyViolationDetails } from "./types";
declare type NextCall = (options: grpc.CallOptions) => grpc.InterceptingCall | null;
export declare type InterceptorMethod = (options: grpc.CallOptions, nextCall: NextCall) => any;
export declare class MetadataInterceptor {
    private developer_token;
    private login_customer_id;
    private linked_customer_id;
    private access_token;
    private auth;
    private requestInterceptor;
    constructor(developer_token: string, login_customer_id: string | undefined, linked_customer_id: string | undefined, access_token: string | undefined, auth: Auth | undefined);
    intercept(options: grpc.CallOptions, nextCall: NextCall): grpc.InterceptingCall;
    private buildRequester;
}
export declare class ExceptionInterceptor {
    private requestInterceptor;
    constructor();
    intercept(options: grpc.CallOptions, nextCall: NextCall): grpc.InterceptingCall;
    handleGrpcFailure(status: grpc.StatusObject): Error | ClientError;
    private buildRequester;
    private buildListener;
    private getGoogleAdsFailure;
    private getRequestId;
}
export declare class ResponseParsingInterceptor {
    private requestInterceptor;
    constructor();
    intercept(options: grpc.CallOptions, nextCall: NextCall): grpc.InterceptingCall;
    private buildRequester;
    private buildListener;
}
export declare class PreventMutationsInterceptor {
    private requestInterceptor;
    private blankInterceptor;
    constructor();
    intercept(options: grpc.CallOptions, nextCall: NextCall): grpc.InterceptingCall;
    private buildRequester;
}
export declare class LoggingInterceptor {
    private requestInterceptor;
    private responseListener;
    private logger;
    constructor(options: LogOptions);
    intercept(options: grpc.CallOptions, nextCall: NextCall): grpc.InterceptingCall;
    private buildRequester;
    private buildListener;
}
declare class ClientError extends Error {
    message: string;
    readonly request_id: string | undefined;
    readonly failure: GoogleAdsFailure;
    readonly error_code: object;
    readonly location: string;
    readonly policy_violation_details: PolicyTopicEntry.AsObject[] | PolicyViolationDetails.AsObject | undefined;
    constructor(message: string, requestId: string | undefined, failure: GoogleAdsFailure, path?: string, policyViolationDetails?: PolicyTopicEntry.AsObject[] | PolicyViolationDetails.AsObject | undefined);
}
export {};
