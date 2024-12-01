import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://backend-53nt.onrender.com", // Backend server URL
  proxy: false,
  withCredentials: true, // Allow sending cookies
});

export default apiClient;
