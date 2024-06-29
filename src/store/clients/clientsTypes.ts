import { Client, listClientsParams, searchClientParams, pendency } from "@domain";

export type ClientsStore = {
    clients: Client[] | undefined;
    setClients: (client: Client[] | undefined) => void;
    getClients: ({ user_id }: listClientsParams) => void;
    searchClient: (params: searchClientParams) => void;
    deleteClient: (id: string) => void;
    setPendency: (pendency: Omit<pendency, 'id' | 'status'>) => void;
    loading: boolean
};