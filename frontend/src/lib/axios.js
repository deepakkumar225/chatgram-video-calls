import axios from "axios";


const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api"

export const axiosInstance = axios.create({
  baseURL: BASE_URL, // match your backend port
  withCredentials: true, // ← THIS sends the JWT cookie with every request
});

