import { api } from "@services";
import { ParamsCreateAccount, UserAPI } from "./createAccountType";


async function createAccount(params: ParamsCreateAccount): Promise<UserAPI> {
    const response = await api.post<UserAPI>('/users', params);
    return response.data;
}

export const authApi = {
    createAccount,
};