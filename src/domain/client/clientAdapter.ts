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

            case 'noMovement':
                return enumStatus.noMovement

            default:
                return enumStatus.noMovement
        }
    }
    return {
        id: clientApi.id.toString(),
        name: clientApi.name.toString(),
        email: clientApi.email?.toString(),
        phone: clientApi.phone?.toString(),
        birthDate: clientApi.date_nasc?.toString(),
        status: getStatus()
    }
}

export const clientAdapter = { toClient }
