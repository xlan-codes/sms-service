import {Method,AxiosRequestConfig, AxiosTransformer, AxiosAdapter, AxiosBasicCredentials, AxiosProxyConfig, CancelToken, ResponseType} from "axios";

// import { OptionsWithUri } from "request";

export class OptionsBuilder {
  private options: OptionsExt;

  private constructor(baseUrl: string) {
    this.options = new OptionsExt();
    this.options.baseURL = baseUrl;
  }

  public static create(baseUrl: string): OptionsBuilder {
    const ob:OptionsBuilder = new OptionsBuilder(baseUrl);
    return ob;
  }

  public method(method: Method) {
    this.options.method = method;
    return this;
  }
  public baseUrl(uri: string) {
    this.options.baseURL = uri;
    return this;
  }

  public uri(uri: string) {
    this.options.url = uri;
    return this;
  }

  public body(body: any) {
    this.options.data = body;
    return this;
  }

  public headers(header: any) {
    this.options.headers = header;
    return this;
  }

  public json(flag: boolean) {
    // this.options.json = flag;
    return this;
  }

  public build() {
    return this.options;
  }
}

class OptionsExt implements AxiosRequestConfig {
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
