
export enum enumStatus {
    'late',
    'paid',
    'closeToWin',
    'noMoviment'
}


export interface ClientResponseApi {
    id: string,
    name: string,
    email: string | null,
    phone: string | null,
    date_nasc: string | null,
    user_id: string,
    status: string,
    created_at: string,
    updated_at: string,
}

export interface Client {
    id: string,
    name: string,
    email: string | null,
    phone: string | null,
    birthDate: string | null,
    status: enumStatus
}

export interface createClientParams {
    name: string,
    email?: string,
    phone?: string,
    date_nasc?: string,
    user_id: string
}
export interface shearchClientParams {
    name: string,
    user_id: string
}
export interface listClientsParams {
    user_id: string
}

export interface deleteClientProps {
    id: string
}