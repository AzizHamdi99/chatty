import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env."http://localhost:5001/api",
    withCredentials: true
})