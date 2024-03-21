import { ToastProps } from 'react-native-toast-notifications';

type ToastType = import('react-native-fast-toast');

declare global {
    const toast: ToastProps;
}

declare module '@env' {
    export const REACT_NATIVE_ENVIRONMENT: string;
    export const REACT_NATIVE_API_URL_STAGING: string;
    export const REACT_NATIVE_API_URL_LOCAL: string;
    export const REACT_NATIVE_API_URL_PROD: string;
    export const REACT_NATIVE_API_URL_QA: string;
}

interface Config {
    adapter: string[];
    baseURL: string;
    data: string;
    env: {
        Blob: Function;
        FormData: Function;
    };
    headers: Record<string, string>;
    maxBodyLength: number;
    maxContentLength: number;
    method: string;
    timeout: number;
    transformRequest: Function[][];
    transformResponse: Function[][];
    transitional: {
        clarifyTimeoutError: boolean;
        forcedJSONParsing: boolean;
        silentJSONParsing: boolean;
    };
    url: string;
    validateStatus: Function;
    xsrfCookieName: string;
    xsrfHeaderName: string;
}

interface Data {
    message: string;
    status: string;
}

interface Headers {
    [key: string]: string;
}

interface Request {
    DONE: number;
    HEADERS_RECEIVED: number;
    LOADING: number;
    OPENED: number;
    UNSENT: number;
    _aborted: boolean;
    _cachedResponse: any; // Coloque o tipo correto aqui se tiver
    _hasError: boolean;
    _headers: Headers;
    _incrementalEvents: boolean;
    _lowerCaseResponseHeaders: Headers;
    _method: string;
    _perfKey: string;
    _performanceLogger: any; // Coloque o tipo correto aqui se tiver
    _requestId: any; // Coloque o tipo correto aqui se tiver
    _response: string;
    _responseType: string;
    _sent: boolean;
    _subscriptions: any[]; // Coloque o tipo correto aqui se tiver
    _timedOut: boolean;
    _trackingName: string;
    _url: string;
    readyState: number;
    responseHeaders: Headers;
    responseURL: string;
    status: number;
    timeout: number;
    upload: any; // Coloque o tipo correto aqui se tiver
    withCredentials: boolean;
}

export interface ApiResponse {
    config: Config;
    data: Data;
    headers: Headers;
    request: Request;
    status: number;
    statusText?: string;
}

export interface ErrorApiResponse {
    response: {
        config: Config; // Utilize a interface Config definida anteriormente
        data: {
            message: string;
            status: string;
        };
        headers: Headers; // Utilize a interface Headers definida anteriormente
        request: Request; // Utilize a interface Request definida anteriormente
        status: number;
        statusText?: string;
    }
}