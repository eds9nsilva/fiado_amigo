import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { type ClientsStore } from './clientsTypes';
import { mmkvStorage } from '@storage';
import { Client, clientService, listClientsParams, shearchClientParams } from '@domain';

const initialClientsStore = {
    clients: [],
    loading: false
};

const KEY_STORAGE = 'clients-storage';

export const useClientsStore = create<ClientsStore>()(
    persist(
        (set) => ({
            ...initialClientsStore,
            setClients: (client: Client[] | undefined) => set({ clients: client }),
            getClients: async ({ user_id }: listClientsParams) => {
                set(() => ({ loading: true }))
                const clients = await clientService.listClients({ user_id: user_id })
                set({ clients: clients })
                set(() => ({ loading: false }))
            },
            async searchClient(params: shearchClientParams) {
                set(() => ({ loading: true }))
                const clients = await clientService.searchClient(params);
                set({ clients: clients })
                set(() => ({ loading: false }))
            },
            async deleteClient(id: string) {
                try {
                    await clientService.deleteClient(id)
                    const newlistClients = (useClientsStore.getState().clients || []).filter(item => item?.id !== id)
                    set({ clients: newlistClients })
                } catch (error) {}
            }
        }),
        {
            name: KEY_STORAGE,
            storage: createJSONStorage(() => mmkvStorage),
        },
    ),
);
