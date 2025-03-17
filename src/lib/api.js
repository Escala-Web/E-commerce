import axios from "axios";

export const api = axios.create({
    baseURL: "http://192.168.15.9/api-php",
});


api.interceptors.request.use(
    (config) => {
    
        if (config.requiresAuth) {
            const token = JSON.parse(localStorage.getItem('userLogin'));// Ou outro método de armazenamento do token
            if (token) {
                config.headers.Authorization = `Bearer ${token[0].token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);
