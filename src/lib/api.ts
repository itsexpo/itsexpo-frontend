import axios from "axios";

export const api = axios.create({
  baseURL: "https://inilho.its.ac.id/api",
  headers: {
    "Content-Type": "application/json",
    "Accept-Type": "application/json",
  },
  withCredentials: false,
});

api.defaults.withCredentials = false;

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (config.headers) {
    config.headers.Authorization = token ? `Bearer ${token}` : "";
  }
  return config;
});

export default api;
