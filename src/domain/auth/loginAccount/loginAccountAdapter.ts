/**
 * @description Adapta o PostApi para o mode de Post
 */

import { AuthUser, ResponseLogin } from "./loginAccountType";

function toAuth(userAPI: ResponseLogin): AuthUser {
    return {
        user: {
            name: userAPI.user.name.toString(),
            email: userAPI.user.email.toString(),
            id: userAPI.user.id.toString(),
        },
        token: userAPI.token.toString()

    }
}

export const authAdapter = { toAuth }