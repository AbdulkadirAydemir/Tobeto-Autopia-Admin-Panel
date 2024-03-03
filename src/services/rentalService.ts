import { AxiosResponse } from 'axios';
import axiosInstance from '../core/utils/interceptors/axiosInterceptors';
import { UpdateRentalRequest } from '../models/requests/rental/updateRentalRequest';
import { DataResultByIdResponse } from '../models/responses/baseResponse/dataResultByIdResponse';
import { AddRentalResponse } from '../models/responses/rental/addRentalResponse';
import { UpdateRentalResponse } from '../models/responses/rental/updateRentalResponse';
import { AddRentalRequest } from '../models/requests/rental/addRentalRequest';

class RentalService{
    public apiUrl:string;

    constructor(){
        this.apiUrl = "rentals";
    }
    
    addRental(request:AddRentalRequest):Promise<AxiosResponse<DataResultByIdResponse<AddRentalResponse>, any>> {
		return axiosInstance.post<DataResultByIdResponse<AddRentalResponse>>(this.apiUrl, request);
	}
    updateRental(
		request: UpdateRentalRequest,
	): Promise<AxiosResponse<UpdateRentalResponse, any>> {
		return axiosInstance.put<UpdateRentalResponse>(this.apiUrl, request);
	}
	delete(id: number) {
		return axiosInstance.delete(this.apiUrl + "/" + id);
	}
	
}

const rentalService = new RentalService();
export default rentalService;