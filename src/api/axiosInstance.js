import axios from 'axios';
import store from "../store";

const instance = axios.create({
    baseURL: 'http://localhost:81/api/v1'
});

instance.interceptors.request.use(
    config => {
        const token = store.getState().auth;
        config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    error => Promise.reject(error)
);

export default instance;