import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
    baseURL: 'https://fvaly.herokuapp.com/api',
    timeout: 15000,
});

const responseBody = (res: AxiosResponse) => res.data.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: object) =>
        instance.post(url, body).then(responseBody),
    patch: (url: string, body: object) =>
        instance.patch(url, body).then(responseBody),
    delete: (url: string) => instance.delete(url).then(responseBody),
};

export default requests;
