import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios';

export interface RequestConfig extends AxiosRequestConfig {
    autoHandlerError?: boolean | ((error: any) => boolean)
}

class Http {
    client: AxiosInstance;

    constructor(public baseUrl: string, public handleError?: (error: any) => Promise<any>) {
        this.client = axios.create({
            baseURL: baseUrl,
            timeout: 10 * 1000,
            headers: {},
            withCredentials: true
        });
    }

    ajax<T>(options: RequestConfig) {
        const { method, url, data, autoHandlerError, ...config } = options;
        const promise =
            method === 'get' ? this.client.get<T>(url!, config) :
                method === 'post' ? this.client.post<T>(url!, data, config) :
                    method === 'patch' ? this.client.patch<T>(url!, data, config) :
                        method === 'delete' ? this.client.delete<T>(url!, config) : undefined as never;
        return promise.then(null, error => {
            if ((typeof autoHandlerError === 'function' ? autoHandlerError(error) : autoHandlerError) && this.handleError) {
                return this.handleError(error.response.data);
            } else {
                console.log(error.response);
                return Promise.reject(error.response.data);
            }
        });
    }

    get<T>(url: string, options?: RequestConfig) {
        return this.ajax<T>({ ...options, url, method: 'get' });
    }

    post<T>(url: string, data?: unknown, options?: RequestConfig) {
        return this.ajax<T>({ ...options, url, data, method: 'post' });
    }

    patch<T>(url: string, data?: unknown, options?: RequestConfig) {
        return this.ajax<T>({ ...options, url, data, method: 'patch' });
    }

    delete<T>(url: string, options?: RequestConfig) {
        return this.ajax<T>({ ...options, url, method: 'delete' });
    }

}

const isDev = () => window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const defaultHttp = new Http(
    isDev() ? '' : '',
    error => {
        if (error.isAxiosError) {
            const { response } = error as AxiosError;
            if (response === undefined) {
                console.log('network error');
            } else if (response?.status === 401) {
                console.log('sign in');
            } else if (response?.status === 404) {
                console.log('not found');
            } else if (response?.status === 422) {
                return Promise.reject(response.data);
            } else if (response?.status > 422) {
                console.log('server busy');
            }
        }
        return Promise.reject(error);
    }
);

export { defaultHttp, Http };