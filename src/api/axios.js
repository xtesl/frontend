import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:4000", // Backend server URL
  withCredentials: true, // Allow sending cookies
});

export default apiClient;
