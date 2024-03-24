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
import { useAuthStore } from '@store';
import { clientService } from '@domain';
import { useNavigation } from '@react-navigation/native';

const defaultValues: RegisterClientsSchema = {
  name: '',
  phone: '',
  email: '',
  birthDate: ''
};

export function RegisterClients() {
  const authStore = useAuthStore();
  const { goBack } = useNavigation();

  const [loading, setLoading] = useState<boolean>();

  const { control, formState, handleSubmit } = useForm<RegisterClientsSchema>({
    resolver: zodResolver(registerClientsSchema),
    defaultValues,
    mode: 'onChange',
  });

  async function submitRegisterClient(data: RegisterClientsSchema) {
    setLoading(true);
    const client = await clientService.createClient(data, authStore.user!.id)
    setLoading(false);
    if (client) {
      goBack()
    }
  }

  return (
    <Screen scrollable canGoBack>
      <Box alignItems='center' mb='s20'>
        <Text preset="headingMedium">
          {'Cadastro de Cliente'}
        </Text>
      </Box>
      <FormTextInput
        control={control}
        name="name"
        autoCapitalize="words"
        label={'* Nome'}
        placeholder={'Digite o nome'}
        boxProps={{ mb: 's20' }}
      />
      <FormTextInput
        control={control}
        name="phone"
        autoCapitalize="words"
        label={'Telefone'}
        type='phone'
        placeholder={'Digite o telefone'}
        boxProps={{ mb: 's20' }}
      />
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder={'Digite e-mail'}
        boxProps={{ mb: 's20' }}
      />
      <FormTextInput
        control={control}
        name="birthDate"
        type='birthDate'
        autoCapitalize="words"
        label={'Data Nascimento'}
        placeholder={'Digite o nome'}
        boxProps={{ mb: 's20' }}
      />
      <Button
        onPress={handleSubmit(submitRegisterClient)}
        disabled={!formState.isValid}
        loading={loading}
        title={'Cadastrar cliente'}
      />
    </Screen>
  );
}