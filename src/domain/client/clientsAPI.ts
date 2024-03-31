import { api } from "@services";
import { ClientResponseApi, createClientParams, deleteClientProps, listClientsParams, shearchClientParams } from "./clientsTypes";


async function listClient(params: listClientsParams): Promise<ClientResponseApi[] | []> {
    const response = await api.get(`/client/user/${params.user_id}`);
    return response.data;
}

async function createClient(params: createClientParams): Promise<ClientResponseApi> {
    const response = await api.post('/client', params);
    return response.data;
}

async function shearchClient(params: shearchClientParams): Promise<ClientResponseApi[] | []> {
    const response = await api.get(`/client/name/${params.user_id}/${params.name}`, );
    return response.data;
}
async function deleteClient(id_client: string): Promise<ClientResponseApi[] | []> {
    const response = await api.delete(`/client/${id_client}`, );
    return response.data;
}

export const clientApi = {
    listClient,
    createClient,
    shearchClient,
    deleteClient
};