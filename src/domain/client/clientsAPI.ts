import { api } from "@services";
import { ClientResponseApi } from "./clientsTypes";
import reactotron from "reactotron-react-native";


async function listClient(): Promise<ClientResponseApi[] | []> {
    
    const response = await api.get('/client');
    reactotron.log('chegou aqui')

    return response.data;
}

export const clientApi = {
    listClient,
};