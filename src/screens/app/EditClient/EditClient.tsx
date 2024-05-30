import React, { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { t } from 'i18next';

import {
  Box,
  Button,
  FormTextInput,
  Screen,
  Text,
} from '@components';

import { registerClientsSchema, RegisterClientsSchema } from './signUpSchema';
import { useAuthStore, useClientsStore } from '@store';
import { Client, clientService } from '@domain';
import { useNavigation, useRoute } from '@react-navigation/native';


type routeParams = {
  client: Client
}

export function EditClient() {
  const authStore = useAuthStore();
  const useClients = useClientsStore();
  const routes = useRoute();
  const { client } = routes.params as routeParams;

  const { goBack } = useNavigation();

  const [loading, setLoading] = useState<boolean>();

  const { control, formState, handleSubmit } = useForm<RegisterClientsSchema>({
    resolver: zodResolver(registerClientsSchema),
    defaultValues: {
      id: client.id,
      name: client.name,
      birthDate: client.birthDate,
      email: client.email,
      phone: client.phone
    },
    mode: 'onChange',
  });


  async function submitRegisterClient(data: RegisterClientsSchema) {
    setLoading(true);
    const isSuccess = await clientService.updateClient(data)
    setLoading(false);
    if (isSuccess) {
      useClients.getClients({ user_id: authStore.user!.id })
      goBack()
    }
  }

  function disabledButton() {
    const {birthDate, email, name, phone} = formState.dirtyFields;

    if (!name) {
      return true
    }

    if (
      birthDate != formState.defaultValues?.birthDate
      || email != formState.defaultValues?.email
      || name.toString() != formState.defaultValues?.name
      || phone != formState.defaultValues?.phone
    ) {
      return false
    }
    return true;
  }

  return (
    <Screen scrollable canGoBack>
      <Box alignItems='center' mb='s20'>
        <Text preset="headingMedium">
          Editar Cliente
        </Text>
      </Box>
      <FormTextInput
        control={control}
        name="name"
        autoCapitalize="words"
        label={'* ' + t('name')}
        placeholder={t('enterName')}
        boxProps={{ mb: 's20' }}
      />
      <FormTextInput
        control={control}
        name="phone"
        autoCapitalize="words"
        label={t('phone')}
        type='phone'
        placeholder={t('enterPhone')}
        boxProps={{ mb: 's20' }}
      />
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder={t('enterEmail')}
        boxProps={{ mb: 's20' }}
      />
      <FormTextInput
        control={control}
        name="birthDate"
        type='birthDate'
        autoCapitalize="words"
        label={t('dateOfBirth')}
        placeholder={t('enterDateOfBirth')}
        boxProps={{ mb: 's20' }}
      />
      <Button
        onPress={handleSubmit(submitRegisterClient)}
        disabled={disabledButton()}
        loading={loading}
        title={'Editar Cliente'}
      />
    </Screen>
  );
}