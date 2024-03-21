import { User, UserAPI } from "../createAccount/createAccountType";

export interface ParamsLoginAccount {
    email: string;
    password: string;
}


export interface ResponseLogin {
    user: UserAPI
    token: string;
}

export interface AuthUser {
    user: User,
    token: string
}