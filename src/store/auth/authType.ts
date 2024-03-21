import { ParamsCreateAccount, ParamsLoginAccount, User } from "@domain";

export type UserStore = {
    user?: User;
    setUser: (user?: User) => void;

    token?: string;
    setToken: (token?: string) => void;

    signUp: (params: ParamsCreateAccount) => Promise<User | undefined>;

    login: (params: ParamsLoginAccount) => void;

    loading: boolean

    rememberMe: boolean
    setRememberMe: (rememberMe: boolean) => void;

};