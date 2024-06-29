import React, { useEffect, useState } from "react";
import { Box, BoxProps, Button, FormTextInput, Screen, Text, TouchableOpacityBox } from "@components";
import { RegisterPendencySchema, registerPendencySchema } from "./signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { t, use } from "i18next";
import { useClientsStore, useAuthStore } from "@store";
import { ModalSelectClient } from "./components/modalSelectClient/modalSelectClient";
import reactotron from "reactotron-react-native";
import { Client } from "@domain";

const defaultValues: RegisterPendencySchema = {
    client_id: '',
    value: '',
    description: '',
};

export function RegisterPendency() {
    const { setPendency } = useClientsStore();
    const { user } = useAuthStore();

    const [showModalSelectClient, setShowModalSelectClient] = useState<Boolean>(false);
    const [selectClient, setSelectClient] = useState<Client | null>(null);

    const { control, formState, handleSubmit, setValue,  } = useForm<RegisterPendencySchema>({
        resolver: zodResolver(registerPendencySchema),
        defaultValues,
        mode: 'onChange',
    });

    function updateShowSelect() {
        setShowModalSelectClient(!showModalSelectClient)
    }

    function updateSelectClient(client: Client) {
        setSelectClient(client);
        setValue('client_id', client.id,  { shouldValidate: true });

        updateShowSelect();
    }

    function onSubmit(data: RegisterPendencySchema) {
        reactotron.log(data);
        setPendency(data);
        
    }

    function disabledButton() {
        const { client_id, value } = control._formValues;
        if (value && client_id) {
            return false;
        }
        return true;
    }
 
    return (
        <Screen canGoBack>
            <Box alignItems='center' mb='s20'>
                <Text preset="headingMedium">
                    Registrar Dívida
                </Text>
            </Box>
            <TouchableOpacityBox onPress={updateShowSelect}>
                <Text mb="s4" preset="paragraphMedium">
                    {'* Cliente'}
                </Text>
                <Box {...$textInputContainer}>
                    <Text color={selectClient ? "backgroundContrast" : "gray2"} preset="paragraphMedium">
                        {selectClient ? selectClient.name : 'Selecione um cliente'}
                    </Text>
                </Box>
                <FormTextInput
                    control={control}
                    name="value"
                    label="* Valor"
                    keyboardType='numeric'
                    placeholder={'Digite o valor da dívida'}
                    boxProps={{ mb: 's20' }}
                    type="money"
                />
                <FormTextInput
                    control={control}
                    name="description"
                    label="Descrição"
                    keyboardType='default'
                    placeholder={'Digite a descrição da dívida'}
                    boxProps={{ mb: 's20' }}
                    multiline={true}
                />
                <Button
                    onPress={handleSubmit(onSubmit)}
                    title={'Cadastrar Dívida'}
                />
            </TouchableOpacityBox>
            {
                showModalSelectClient && (
                    <ModalSelectClient
                        onClose={() => setShowModalSelectClient(false)}
                        onPressSelectClient={client => updateSelectClient(client)}
                    />
                )
            }
        </Screen>
    )
}

const $textInputContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: 0,
    borderColor: 'gray1',
    padding: 's16',
    borderRadius: 's8',
    backgroundColor: 'secondaryBackground',
    marginBottom: "s20"
};