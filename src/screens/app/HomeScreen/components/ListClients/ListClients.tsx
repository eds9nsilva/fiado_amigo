import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Box, FormTextInput, Text, EmptyList } from "@components";
import { useForm } from "react-hook-form";
import { Card } from "./Components/Card/Card";
import { FlatList, ListRenderItem } from "react-native";
import { Client } from "@domain";
import { useAuthStore, useClientsStore } from "@store";

export function ListClients() {
    const useAuth = useAuthStore()
    const useClients = useClientsStore();
    const { control } = useForm();

    const [nameSearch, setNameSearch] = useState<string>('');

    const timerRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        getClients()
    }, [])

    const getClients = async (isSearchNameClean?: boolean) => {
        if (nameSearch.length > 0 && !isSearchNameClean) {
            return
        }
        useClients.getClients({ user_id: useAuth.user!.id })
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
        const params = {
            name,
            user_id: useAuth.user!.id,
        }
        useClients.searchClient(params)
    };

    const renderItems: ListRenderItem<Client> = ({ item }) => {
        return <Card key={item.id} name={item.name} status={item.status} id={item.id} />
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
                {useClients.loading && (
                    <Box mb="s10">
                        <ActivityIndicator color="greenPrimary" />
                    </Box>
                )}
                <FlatList
                    data={useClients.clients}
                    renderItem={renderItems}
                    refreshing={useClients.loading}
                    onRefresh={getClients}
                    ListEmptyComponent={<EmptyList size={280} preset="headingMedium" mt="s20" />}
                    contentContainerStyle={{ bottom: 10 }}
                    keyExtractor={item => String(item.id)}
                />
            </Box>
        </Box>
    )
}