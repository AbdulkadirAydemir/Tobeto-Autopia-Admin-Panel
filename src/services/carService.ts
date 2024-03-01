import { AxiosResponse } from 'axios';
import axiosInstance from '../core/utils/interceptors/axiosInterceptors';
import { AddCarRequest } from './../models/requests/car/addCarRequest';
import { AddCarResponse } from '../models/responses/car/addCarResponse';
import { BaseService } from './baseService';
import { GetAllCarResponse } from '../models/responses/car/GetAllCarResponse';
import { GetByIdCarResponse } from '../models/responses/car/GetByIdCarResponse';
import { UpdateCarRequest } from '../models/requests/car/updateCarRequest';
import { UpdateCarResponse } from '../models/responses/car/updateCarResponse';

class CarService extends BaseService<GetAllCarResponse,
GetByIdCarResponse,
AddCarRequest,
AddCarResponse,
UpdateCarRequest,
UpdateCarResponse>{
    public apiUrl: string;
    constructor(){
        super();
        this.apiUrl = "cars";
    }

   addCar(request: AddCarRequest, file: File): Promise<AxiosResponse<AddCarResponse>> {
    const formData = new FormData();
    formData.append('kilometer', request.kilometer.toString());
    formData.append('year', request.year.toString());
    formData.append('plate', request.plate);
    formData.append('dailyPrice', request.dailyPrice.toString());
    formData.append('minFindeksRate', request.minFindeksRate.toString());
    formData.append('trunkVolume', request.trunkVolume.toString());
    formData.append('capacity', request.capacity.toString());
    formData.append('caseType', request.caseType);
    formData.append('fuelType', request.fuelType);
    formData.append('gearType', request.gearType);
    formData.append('modelId', request.modelId.toString());
    formData.append('colorId', request.colorId.toString());
    formData.append('taxRateId', request.taxRateId.toString());
    formData.append('carStatus', request.carStatus);

    formData.append('file',file);
    
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    };

    return axiosInstance.post<AddCarResponse>(this.apiUrl, formData, config);
}
}

const carService = new CarService();
export default carService