import axios from "axios";
console.log("base url", import.meta.env.VITE_SERVER_BASE_URL);
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
