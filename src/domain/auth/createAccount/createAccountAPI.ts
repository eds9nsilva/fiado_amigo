import { api } from "@services";
import { ParamsCreateAccount, User } from "./createAccountType";


async function createAccount(params: ParamsCreateAccount): Promise<User> {
    const response = await api.post<User>('/users', params);
    return response.data;
}

export const authApi = {
    createAccount,
};