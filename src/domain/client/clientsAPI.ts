import { api } from "@services";
import { ClientResponseApi, createClientParams } from "./clientsTypes";


async function listClient(): Promise<ClientResponseApi[] | []> {
    const response = await api.get('/client');
    return response.data;
}

async function createClient(params: createClientParams): Promise<ClientResponseApi> {
    const response = await api.post('/client', params);
    return response.data;
}

export const clientApi = {
    listClient,
    createClient
};