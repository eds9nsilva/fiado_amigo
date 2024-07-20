import React, { useEffect, useState } from "react";
import { Box, BoxProps, Button, FormTextInput, Screen, Text, TouchableOpacityBox } from "@components";
import { RegisterPendencySchema, registerPendencySchema } from "./signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { t } from "i18next";
import { useClientsStore, useAuthStore } from "@store";
import { ModalSelectClient } from "./components/modalSelectClient/modalSelectClient";
import { Client } from "@domain";
import { useNavigation, useRoute } from "@react-navigation/native";

const defaultValues: RegisterPendencySchema = {
    client_id: '',
    value: '',
    description: '',
    due_date: ''
};

type routeParams = {
    client?: Client
}

export function RegisterPendency() {
    const { setPendency, loading } = useClientsStore();
    const { goBack } = useNavigation();
    const routes = useRoute();

    const { client } = routes.params as routeParams;

    const [showModalSelectClient, setShowModalSelectClient] = useState<Boolean>(false);
    const [selectClient, setSelectClient] = useState<Client | null>(null);

    const { control, formState, handleSubmit, setValue, } = useForm<RegisterPendencySchema>({
        resolver: zodResolver(registerPendencySchema),
        defaultValues,
        mode: 'onChange',
    });

    useEffect(() => {
        if (client) {
            setSelectClient(client);
            setValue('client_id', client.id);
        }
    }, []);

    function updateShowSelect() {
        setShowModalSelectClient(!showModalSelectClient)
    }

    function updateSelectClient(client: Client) {
        setSelectClient(client);
        setValue('client_id', client.id);

        updateShowSelect();
    }

    function onSubmit(data: RegisterPendencySchema) {
        setPendency(data);
        goBack();
    }

    function disabledButton() {
        const { value } = formState.dirtyFields;
        if (value && selectClient) {
            return false;
        }
        return true;
    }

    return (
        <Screen canGoBack>
            <Box alignItems='center' mb='s20'>
                <Text preset="headingMedium">
                    {t('registerPendency')}
                </Text>
            </Box>
            <TouchableOpacityBox onPress={updateShowSelect}>
                <Text mb="s4" preset="paragraphMedium">
                    {'*' + t('client')}
                </Text>
                <Box {...$textInputContainer}>
                    <Text color={selectClient ? "backgroundContrast" : "gray2"} preset="paragraphMedium">
                        {selectClient ? selectClient.name : 'Selecione um cliente'}
                    </Text>
                </Box>
                <FormTextInput
                    control={control}
                    name="value"
                    label={'*' + t('value')}
                    keyboardType='numeric'
                    placeholder={t('enterValuePendency')}
                    boxProps={{ mb: 's20' }}
                    type="money"
                />
                <FormTextInput
                    control={control}
                    name="due_date"
                    type='birthDate'
                    autoCapitalize="words"
                    label={t('due-date')}
                    keyboardType='numeric'
                    placeholder={t('enterDueDate')}
                    boxProps={{ mb: 's20' }}
                />
                <FormTextInput
                    control={control}
                    name="description"
                    label={t('description')}
                    keyboardType='default'
                    placeholder={t('enterDescriptionPendency')}
                    boxProps={{ mb: 's20' }}
                    multiline={true}
                />
                <Button
                    onPress={handleSubmit(onSubmit)}
                    title={t('registerPendency')}
                    disabled={disabledButton()}
                    loading={loading}
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