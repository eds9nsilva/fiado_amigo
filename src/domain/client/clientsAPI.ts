import { api } from "@services";
import { ClientResponseApi, createClientParams, listClientsParams } from "./clientsTypes";


async function listClient(params: listClientsParams): Promise<ClientResponseApi[] | []> {
    const response = await api.get(`/client/user/${params.user_id}`);
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