/**
 * @description Adapta o PostApi para o mode de Post
 */

import { User, UserAPI } from "./createAccountType";

function toUser(userAPI: UserAPI): User {
    return {
        name: userAPI.name.toString(),
        email: userAPI.email.toString(),
        id: userAPI.id.toString(),
    }
}

export const userAdapter = { toUser }