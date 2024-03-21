import { api } from "@services";
import { ParamsLoginAccount, ResponseLogin } from "./loginAccountType";


async function loginAccount(params: ParamsLoginAccount): Promise<ResponseLogin> {
    const response = await api.post<ResponseLogin>('/sessions', params);
    return response.data;
}

export const authApi = {
    loginAccount,
};