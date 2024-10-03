import axios from "axios";
import { getFromLocalStorage, removeFromLocalStorage } from ".";

const userData = getFromLocalStorage("userData");
const token = userData ? userData.token : null;

const axiosInstance = axios.create({
  baseURL: "http://localhost:3002/api/v1",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Modify request config here if needed
    const token = getFromLocalStorage("userData")?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error here
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Handle response error here
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error, e.g., redirect to login
      console.error("Unauthorized, redirecting to login...");
      removeFromLocalStorage("userData");
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
