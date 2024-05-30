import { api } from "@services";
import { Client, ClientResponseApi, createClientParams, deleteClientProps, listClientsParams, searchClientParams as searchClientParams } from "./clientsTypes";
import reactotron from "reactotron-react-native";


async function listClient(params: listClientsParams): Promise<ClientResponseApi[] | []> {
    const response = await api.get(`/client/user/${params.user_id}`);
    return response.data;
}

async function createClient(params: createClientParams): Promise<ClientResponseApi> {
    const response = await api.post('/client', params);
    return response.data;
}

async function searchClient(params: searchClientParams): Promise<ClientResponseApi[] | []> {
    const response = await api.get(`/client/name/${params.user_id}/${params.name}`,);
    return response.data;
}
async function deleteClient(id_client: string): Promise<ClientResponseApi[] | []> {
    const response = await api.delete(`/client/${id_client}`,);
    return response.data;
}

async function updateClient(params: Omit<Client, 'status'>) {
    const body = {
        name: params.name,
        email: params.email,
        phone: params.phone,
        date_nasc: params.birthDate,
    }
    const response = await api.put(`/client/${params.id}`, body);
    return response.data;
}

export const clientApi = {
    listClient,
    createClient,
    searchClient: searchClient,
    deleteClient,
    updateClient
};