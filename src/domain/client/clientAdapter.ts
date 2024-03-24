/**
 * @description Adapta o PostApi para o mode de Post
 */

import { Client, ClientResponseApi } from "./clientsTypes";

function toClient(clientApi: ClientResponseApi): Client {
    return {
        id: clientApi.id.toString(),
        name: clientApi.name.toString(),
        email: clientApi.email?.toString() ?? null,
        phone: clientApi.phone?.toString() ?? null,
        birthDate: clientApi.date_nasc?.toString() ?? null
    }
}

export const clientAdapter = { toClient }
