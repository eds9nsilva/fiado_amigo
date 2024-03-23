export interface ClientResponseApi {
    id: string,
    name: string,
    email: string | null,
    phone: string | null,
    date_nasc: string | null,
    user_id: string,
    created_at: string,
    updated_at: string
}

export interface Client {
    id: string,
    name: string,
    email: string | null,
    phone: string | null,
    date_nasc: string | null,
}