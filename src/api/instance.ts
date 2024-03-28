import axios from "axios";
import router from "router/router.ts";

const instance = axios.create({
  baseURL: import.meta.env.VITE_ENV_BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// request interceptor
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// response interceptor
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status) {
      switch (error.response.status) {
        // status code 가 401인 경우 `/login` 페이지로 리다이렉트
        case 401:
          router.push("/login").catch(() => {});
          break;
        default:
          return Promise.reject(error);
      }
    }
    // Do something with response error
    return Promise.reject(error);
  },
);

export default instance;
