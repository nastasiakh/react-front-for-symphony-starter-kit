import axios from "axios";
import store from "../store";

const instance = axios.create({
  baseURL: "http://localhost:81/api/v1",
});

instance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return error;
  },
);

export default instance;
