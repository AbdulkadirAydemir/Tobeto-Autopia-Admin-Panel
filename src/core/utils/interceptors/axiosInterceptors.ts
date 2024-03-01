import axios from "axios";
import tokenService from "../../../services/tokenService";

const axiosInstance = axios.create({
    baseURL:"http://localhost:8080/api/",
    
});

axiosInstance.interceptors.request.use(config => {
    let token = tokenService.getToken();
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    if (config.headers['Content-Type'] !== 'multipart/form-data') {
        // Eğer Content-Type 'multipart/form-data' değilse, isteğin Content-Type'ını değiştir
        config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
});

axiosInstance.interceptors.response.use(

    response => {
        return response;
    },
    error => {
    },
    
);

export default axiosInstance;