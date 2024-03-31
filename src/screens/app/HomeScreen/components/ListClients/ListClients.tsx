import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Box, FormTextInput, Text, EmptyList } from "@components";
import { useForm } from "react-hook-form";
import { Card } from "./Components/Card/Card";
import { FlatList, ListRenderItem } from "react-native";
import { Client, clientService, enumStatus } from "@domain";
import { useAuthStore } from "@store";

export function ListClients() {
    const useAuth = useAuthStore()
    const { control } = useForm();

    const [clients, setClients] = useState<Client[] | undefined>();
    const [loadingGetClientes, setLoadingGetClients] = useState<boolean>(false);
    const [nameSearch, setNameSearch] = useState<string>('');

    const timerRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        getClients()
    }, [])

    const getClients = async (isSearchNameClean? : boolean) => {
        if (nameSearch.length > 0 && !isSearchNameClean) {
            return
        }
        setLoadingGetClients(true)
        const clients = await clientService.listClients({ user_id: useAuth.user!.id })
        setClients(clients)
        setLoadingGetClients(false)
    }

    const delayedSearch = (text: string) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        setNameSearch(text)
        if (text.length == 0) {
            getClients(true)
            return
        }
        timerRef.current = setTimeout(() => {
            searchClientByName(text);
        }, 500);
    };

    const searchClientByName = async (name: string) => {
        setLoadingGetClients(true)
        const clients = await clientService.searchClient({ name, user_id: useAuth.user!.id });
        setClients(clients);
        setLoadingGetClients(false)
    };




    const renderItems: ListRenderItem<Client> = ({ item }) => {
        return <Card key={item.id} name={item.name} status={item.status} />
    };


    return (
        <Box mt="s24">
            <Text bold color="gray2">Clientes</Text>
            <FormTextInput
                control={control}
                value={nameSearch}
                name="search"
                placeholder={'Pesquisar'}
                boxProps={{ mt: "s4" }}
                onChangeText={(text) => delayedSearch(text)}
            />
            <Box height={410} mt="s10">
                {loadingGetClientes && (
                    <Box mb="s10">
                        <ActivityIndicator color="greenPrimary" />
                    </Box>
                )}
                <FlatList
                    data={clients}
                    renderItem={renderItems}
                    refreshing={loadingGetClientes}
                    onRefresh={getClients}
                    ListEmptyComponent={<EmptyList size={280} preset="headingMedium" mt="s20" />}
                    contentContainerStyle={{ bottom: 10 }}
                    keyExtractor={item => String(item.id)}
                />
            </Box>
        </Box>
    )
}