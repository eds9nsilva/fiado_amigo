
export enum enumStatus {
    'late',
    'paid',
    'closeToWin',
    'noMovement'
}

export enum typesEnumStatus {
    late = 'late',
    paid = 'paid',
    closeToWin = 'closeToWin',
    noMovement = 'noMovement'
}

export function getEnumStatus(status: enumStatus) {
    switch (status) {
        case enumStatus.late:
            return 'Atrasado'
        case enumStatus.paid:
            return 'Pago'
        case enumStatus.closeToWin:
            return 'Perto de vencer'
        case enumStatus.noMovement:
            return 'Sem movimentação'
    }

}

export interface ClientResponseApi {
    id: string,
    name: string,
    email?: string,
    phone?: string,
    date_nasc?: string,
    user_id: string,
    status: string,
    created_at: string,
    updated_at: string,
}

export interface Client {
    id: string,
    name: string,
    email?: string,
    phone?: string,
    birthDate?: string,
    status: enumStatus
}

export interface pendency {
    id: string,
    client_id: string,
    value: string,
    description?: string
    status: enumStatus
}

export interface createPendencyParams {
    client_id: string,
    amount: number,
    description_products?: string
    status: typesEnumStatus
}
export interface createClientParams {
    name: string,
    email?: string,
    phone?: string,
    date_nasc?: string,
    user_id: string
}
export interface searchClientParams {
    name: string,
    user_id: string
}
export interface listClientsParams {
    user_id: string
}

export interface deleteClientProps {
    id: string
}