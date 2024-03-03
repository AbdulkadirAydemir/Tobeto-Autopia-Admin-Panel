import { AxiosResponse } from 'axios';
import { AddUserRequest } from '../models/requests/user/addUserRequest';
import { UpdateUserRequest } from '../models/requests/user/updateUserRequest';
import { AllDataResultResponse } from "../models/responses/baseResponse/allDataResultResponse";
import { DataResultByIdResponse } from '../models/responses/baseResponse/dataResultByIdResponse';
import { AddUserResponse } from '../models/responses/user/addUserResponse';
import { GetAllUserResponse } from "../models/responses/user/getAllUserResponse";
import { GetByIdUserResponse } from '../models/responses/user/getByIdUserResponse';
import { UpdateUserResponse } from '../models/responses/user/updateUserResponse';
import { BaseService } from "./baseService";
import axiosInstance from '../core/utils/interceptors/axiosInterceptors';

class UserService extends BaseService<
AllDataResultResponse<GetAllUserResponse>,
DataResultByIdResponse<GetByIdUserResponse>,
AddUserRequest,
AddUserResponse,
UpdateUserRequest,
UpdateUserResponse
>
{
    constructor(){
        super();
        this.apiUrl = "users";
    }

    getAllUser(): Promise<AxiosResponse<AllDataResultResponse<GetAllUserResponse>, any>>{
        return axiosInstance.get<AllDataResultResponse<GetAllUserResponse>>(this.apiUrl);        
    }
}

const userSevice = new UserService();
export default userSevice