import { ParamsCreateAccount, User } from "@domain";

export type UserStore = {
    user?: User;
    setUser: (user?: User) => void;

    token?: string;
    setToken: (token?: string) => void;

    signUp: (params: ParamsCreateAccount) => void;

    loading: boolean
};