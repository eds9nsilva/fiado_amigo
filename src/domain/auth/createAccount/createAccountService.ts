import { auth } from "./createAccountAPI";
import { userAdapter } from "./createAccountAdapter";
import { ParamsCreateAccount } from "./createAccountType";

async function createAccount(params: ParamsCreateAccount) {
    try {
        const createAccountParams: ParamsCreateAccount = {
            email: params.email,
            name: params.name,
            password: params.password
        }
        const response = await auth.createAccount(createAccountParams);
        console.log('service: ', response)
        return {
            user: userAdapter.toUser(response)
        }
    } catch (error) {
        console.log(error)
    }

}

export const createAccountService = {
    createAccount
}