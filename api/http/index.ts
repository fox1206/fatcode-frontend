import axios from "axios";

const BASE_URL = "http://194.67.110.24/api/v1/"

const api = axios.create({
    baseURL: BASE_URL
})

api.interceptors.request.use((config)=>{
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`
    return config
})

export default api;