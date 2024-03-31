/**
 * @description Adapta o PostApi para o mode de Post
 */

import { Client, ClientResponseApi, enumStatus } from "./clientsTypes";

function toClient(clientApi: ClientResponseApi): Client {
    const getStatus = (): enumStatus => {
        switch (clientApi.status) {
            case 'late':
                return enumStatus.late

            case 'paid':
                return enumStatus.paid

            case 'closeToWin':
                return enumStatus.closeToWin

            case 'noMoviment':
                return enumStatus.noMoviment

            default:
                return enumStatus.noMoviment
        }
    }
    return {
        id: clientApi.id.toString(),
        name: clientApi.name.toString(),
        email: clientApi.email?.toString() ?? null,
        phone: clientApi.phone?.toString() ?? null,
        birthDate: clientApi.date_nasc?.toString() ?? null,
        status: getStatus()
    }
}

export const clientAdapter = { toClient }
