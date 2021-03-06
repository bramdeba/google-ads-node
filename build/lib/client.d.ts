import { LogOptions } from "./logger";
interface CommonClientOptions {
    developer_token: string;
    login_customer_id?: string;
    linked_customer_id?: string;
    parseResults?: boolean;
    preventMutations?: boolean;
    logging?: LogOptions;
}
interface ClientOptionsWithToken extends CommonClientOptions {
    access_token: string;
}
interface ClientOptionsNoToken extends CommonClientOptions {
    client_id: string;
    client_secret: string;
    refresh_token: string;
    accessTokenGetter?(clientId?: string, clientSecret?: string, refreshToken?: string): Promise<string>;
}
interface GetServiceOptions {
    useStreaming: boolean;
}
export declare class GoogleAdsClient {
    private options;
    private auth;
    constructor(options?: string | ClientOptionsNoToken | ClientOptionsWithToken);
    getService(serviceName: string, serviceOptions?: GetServiceOptions): any;
    buildResource(resource: string, data: any): unknown;
    private buildInterceptors;
    private loadConfig;
    private validateOptions;
    private usingToken;
}
export {};
