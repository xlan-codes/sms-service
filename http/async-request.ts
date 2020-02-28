import axios, { AxiosRequestConfig, AxiosResponse }  from "axios";

export async function requestAsync(options: AxiosRequestConfig) : Promise<AxiosResponse> {
    return await 
        axios(options).then((value) => { 
            return Promise.resolve(value);
        }).catch((reject) => { 
            return Promise.reject(reject);
        });
}