import React, { useEffect, useState } from "react";
import { Box, FormTextInput, Text } from "@components";
import { useForm } from "react-hook-form";
import { Card, enumStatus } from "./Components/Card/Card";
import { FlatList, ListRenderItem } from "react-native";
import { Client, clientService } from "@domain";

export function ListClients() {
    const [clients, setClients] = useState<Client[] | undefined>()

    const getClients = async () => {
        const clients = await clientService.listClients()
        setClients(clients)
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
        return <Card name={item.name} status={enumStatus.paid} />
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
                <FlatList
                    data={clients}
                    renderItem={renderItems}
                    contentContainerStyle={{ bottom: 10 }}
                    keyExtractor={item => String(item.id)}
                />
            </Box>
        </Box>
    )
}