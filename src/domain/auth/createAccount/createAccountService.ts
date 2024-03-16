import { auth } from "./createAccountAPI";
import { userAdapter } from "./createAccountAdapter";
import { ParamsCreateAccount } from "./createAccountType";

async function createAccount(params: ParamsCreateAccount) {
    const response = await auth.createAccount(params);

    return {
        user: userAdapter.toUser(response)
    }
}

export const createAccountService = {
    createAccount
}