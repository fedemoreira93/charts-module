const axios = require("axios").default;
const API_URL = "http://127.0.0.1:8888/api";

export const defaultErrorHandler = (axiosError) => {
  return Promise.reject(
    axiosError.message ? axiosError.message : "Unknown error."
  );
};

export const defaultSuccesHandler = (response) => {
  return Promise.resolve(response.data);
};

export function createApi({
  baseURL = `${API_URL}`,
  timeout = 20000,
  headers = {
    "Content-Type": "application/json",
  },
  withCredentials = false,
  errorHandler = defaultErrorHandler,
  successHandler = defaultSuccesHandler,
}) {
  const api = axios.create();
  api.defaults.baseURL = baseURL;
  api.defaults.timeout = timeout;
  api.defaults.headers = headers;
  api.defaults.withCredentials = withCredentials;
  api.defaults.validateStatus = (status) => {
    console.log(status);

    return status < 300;
  };
  api.interceptors.response.use(
    (response) => successHandler(response),
    (error) => errorHandler(error)
  );

  return api;
}

export const graphApi = createApi({
  baseURL: `${API_URL}/graph/v1`,
});
