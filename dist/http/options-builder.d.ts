import { Method, AxiosRequestConfig, AxiosTransformer, AxiosAdapter, AxiosBasicCredentials, AxiosProxyConfig, CancelToken, ResponseType } from "axios";
export declare class OptionsBuilder {
    private options;
    private constructor();
    static create(baseUrl: string): OptionsBuilder;
    method(method: Method): this;
    baseUrl(uri: string): this;
    uri(uri: string): this;
    body(body: any): this;
    headers(header: any): this;
    json(flag: boolean): this;
    build(): OptionsExt;
}
declare class OptionsExt implements AxiosRequestConfig {
    url?: string;
    method?: Method;
    baseURL?: string;
    transformRequest?: AxiosTransformer | AxiosTransformer[];
    transformResponse?: AxiosTransformer | AxiosTransformer[];
    headers?: any;
    params?: any;
    paramsSerializer?: (params: any) => string;
    data?: any;
    timeout?: number;
    timeoutErrorMessage?: string;
    withCredentials?: boolean;
    adapter?: AxiosAdapter;
    auth?: AxiosBasicCredentials;
    responseType?: ResponseType;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
    onUploadProgress?: (progressEvent: any) => void;
    onDownloadProgress?: (progressEvent: any) => void;
    maxContentLength?: number;
    validateStatus?: (status: number) => boolean;
    maxRedirects?: number;
    socketPath?: string | null;
    httpAgent?: any;
    httpsAgent?: any;
    proxy?: AxiosProxyConfig | false;
    cancelToken?: CancelToken;
}
export {};
