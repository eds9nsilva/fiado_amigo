import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { type ClientsStore } from './clientsTypes';
import { storageService } from '@storage';
import { Client, clientService, listClientsParams, searchClientParams } from '@domain';

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
            async searchClient(params: searchClientParams) {
                set(() => ({ loading: true }))
                const clients = await clientService.searchClient(params);
                set({ clients: clients })
                set(() => ({ loading: false }))
            },
            async deleteClient(id: string) {
                try {
                    await clientService.deleteClient(id)
                    const newListClients = (useClientsStore.getState().clients || []).filter(item => item?.id !== id)
                    set({ clients: newListClients })
                } catch (error) { }
            },
            async setPendency(pendency) {
                try {
                    set(() => ({ loading: true }))
                    await clientService.setPendency(pendency)
                    set(() => ({ loading: false }))
                } catch (error) {
                    set(() => ({ loading: false }))
                }
            }
        }),
        {
            name: KEY_STORAGE,
            storage: createJSONStorage(() => storageService),
        },
    ),
);
