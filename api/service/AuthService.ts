import {AxiosResponse} from "axios";
import {AuthResponse} from "../typeResponse/AuthResponse";
import api from "../http";


//http://194.67.110.24/api/v1/admin/
//
// логин - xd383727@gmail.com
// пароль - allods95

export default class AuthService{
    static async login(email: string, password: string):
        Promise<AxiosResponse<AuthResponse>>{
        return api.post<AuthResponse>("/api-auth/login/",{email, password})
    }

    static async registration(
        email: string,
        password: string,
        password2: string,):
        Promise<AxiosResponse<AuthResponse>>{
        return api.post<AuthResponse>("/",{email, password})
    }

    static async logout(): Promise<void>{
        return api.post("/auth/token/logout/")
    }

}