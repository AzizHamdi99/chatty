import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: a ? "http ://localhost:5001/api" : "/api",
    withCredentials: true
})