import axiosInstance from "../core/utils/interceptors/axiosInterceptors";
import { loginRequest } from "../models/requests/login/loginRequest";
import { AxiosResponse } from 'axios';

class AuthService{
    public apiUrl: string;
    constructor() {
		this.apiUrl = "auth/login";
	}
    login(request:loginRequest): Promise<AxiosResponse<string,any>>{
        return axiosInstance.post<string>(this.apiUrl, request);
    }
}

const authService = new AuthService();
export default authService