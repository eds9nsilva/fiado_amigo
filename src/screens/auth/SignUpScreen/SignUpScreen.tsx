import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Box,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import { useResetNavigationSuccess } from '@hooks';

import { signUpSchema, SignUpSchema } from './signUpSchema';
import { useAuthStore } from '@store';

const defaultValues: SignUpSchema = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export function SignUpScreen() {
  const { reset } = useResetNavigationSuccess();
  const authStore = useAuthStore();

  const { control, formState, handleSubmit } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues,
    mode: 'onChange',
  });

  async function submitForm(data: SignUpSchema) {
    authStore.signUp(data)
    // reset({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'directBox',
    //     color: 'success',
    //   },
    // });

  }
  return (
    <Screen scrollable canGoBack>
      <Box alignItems='center'>
        <Text preset="headingLarge">
          {('createAnAccount')}
        </Text>
        <Text preset="paragraphSmall" mb="s24">{('logInDescription')}</Text>
      </Box>
      <FormTextInput
        control={control}
        name="name"
        autoCapitalize="words"
        label={('yourName')}
        placeholder={('typeYourName')}
        boxProps={{ mb: 's20' }}
      />
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder={('typeYourEmail')}
        boxProps={{ mb: 's20' }}
      />
      <FormPasswordInput
        control={control}
        name="password"
        label={('password')}
        placeholder={('typeYourPassword')}
        boxProps={{ mb: 's20' }}
      />
      <FormPasswordInput
        control={control}
        name="confirmPassword"
        label={('confirmPassword')}
        placeholder={('typeYourPassword')}
        boxProps={{ mb: 's24' }}
      />
      <Button
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        title={('createMyAccount')}
      />
    </Screen>
  );
}