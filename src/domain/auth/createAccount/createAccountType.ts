export interface User {
    name: string;
    email: string;
    id: string;
}

export interface ParamsCreateAccount {
    name: string;
    email: string;
    password: string;
}

export interface UserAPI {
    name: string;
    email: string;
    id: string;
    updated_at: string;
    created_at: string;
}
