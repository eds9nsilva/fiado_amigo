import { Client, listClientsParams, shearchClientParams } from "@domain";

export type ClientsStore = {
    clients: Client[] | undefined;
    setClients: (client: Client[] | undefined) => void;
    getClients: ({ user_id }: listClientsParams) => void;
    searchClient: (params: shearchClientParams) => void;
    deleteClient: (id: string) => void;
    loading: boolean
};