import axios from "axios";

export const https = axios.create({
    baseURL: "http://192.168.15.7/api-php"
})