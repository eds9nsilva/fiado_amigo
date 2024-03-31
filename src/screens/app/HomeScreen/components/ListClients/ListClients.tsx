import React, { useEffect, useState } from "react";
import { ActivityIndicator, Box, FormTextInput, Text, EmptyList } from "@components";
import { useForm } from "react-hook-form";
import { Card, enumStatus } from "./Components/Card/Card";
import { FlatList, ListRenderItem } from "react-native";
import { Client, clientService } from "@domain";
import { useAuthStore } from "@store";

export function ListClients() {
    const useAuth = useAuthStore()
    const [clients, setClients] = useState<Client[] | undefined>();
    const [loadingGetClientes, setLoadingGetClients] = useState<boolean>(false);

    const getClients = async () => {
        setLoadingGetClients(true)
        const clients = await clientService.listClients({ user_id: useAuth.user!.id })
        setClients(clients)
        setLoadingGetClients(false)
    }

    useEffect(() => {
        getClients()
    }, [])

    const { control, formState, handleSubmit } = useForm({
        defaultValues: {
            search: '',
        },
        mode: 'onChange',
    });

    const renderItems: ListRenderItem<Client> = ({ item }) => {
        return <Card  key={item.id} name={item.name} status={enumStatus.closeToWin} />
    };


    return (
        <Box mt="s24">
            <Text bold color="gray2">Clientes</Text>
            <FormTextInput
                control={control}
                name="search"
                placeholder={'Pesquisar'}
                boxProps={{ mt: "s4" }}
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
                    ListEmptyComponent={<EmptyList size={280} preset="headingMedium" mt="s20"/>}
                    contentContainerStyle={{ bottom: 10 }}
                    keyExtractor={item => String(item.id)}
                />
            </Box>
        </Box>
    )
}