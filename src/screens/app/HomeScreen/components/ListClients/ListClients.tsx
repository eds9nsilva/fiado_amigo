import React from "react";
import { Box, FormTextInput, Text } from "@components";
import { useForm } from "react-hook-form";
import { Card, enumStatus } from "./Components/Card/Card";
import { FlatList, ListRenderItem } from "react-native";



const data = [
    {
        id: 0,
        name: "Antonio Edson",
        status: enumStatus.paid
    },
    {
        id: 1,
        name: "Antonio Edson",
        status: enumStatus.closeToWin
    },
    {
        id: 2,
        name: "Antonio Edson",
        status: enumStatus.paid
    },
    {
        id: 3,
        name: "Antonio Edson",
        status: enumStatus.late
    },
    {
        id: 4,
        name: "Antonio Edson",
        status: enumStatus.paid
    },
    {
        id: 5,
        name: "Antonio Edson",
        status: enumStatus.closeToWin
    },
    {
        id: 6,
        name: "Antonio Edson",
        status: enumStatus.late
    },
]

export function ListClients() {
    const { control, formState, handleSubmit } = useForm({
        defaultValues: {
            search: '',
        },
        mode: 'onChange',
    });

    const renderItems: ListRenderItem<{
        id: number;
        name: string;
        status: enumStatus;
    }> = ({ item }) => (
        <Card name={item.name} status={item.status} />
    );


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
                    data={data}
                    renderItem={renderItems}
                    contentContainerStyle={{bottom: 10}}
                    keyExtractor={item => String(item.id)}
                />
            </Box>
        </Box>
    )
}