import { AxiosResponse } from 'axios';
import axiosInstance from '../core/utils/interceptors/axiosInterceptors';
import { AddCarRequest } from './../models/requests/car/addCarRequest';

class CarService{
    public apiUrl: string;
    constructor(){
        this.apiUrl = "cars";
    }

    addCar(request:AddCarRequest): Promise<AxiosResponse<string,any>>{
        return axiosInstance.post<string>(this.apiUrl, request);
    }
    
}
const carService = new CarService();
export default carService