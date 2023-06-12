import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://13.209.81.126:8080',
  timeout: 60000,
});
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
instance.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    return Promise.reject(error);
  },
);
