import axios from "axios";
import config from "../config";
const { baseUrl } = config;

export const request = axios.create({
  baseURL: baseUrl
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: Error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (res) => {
    const data = res.data;
    return data;
  },
  (error: Error) => {
    return Promise.reject(error);
  }
);
