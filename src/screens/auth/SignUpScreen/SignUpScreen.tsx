import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { t } from 'i18next';

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
    const user = await authStore.signUp(data)
    if (user) {
      reset({
        title: t('successfullyCreatedAccount'),
        description: t('nowLoginPlatform'),
        icon: {
          name: 'tickSquare',
          color: 'success',
        },
      });
    }
  }

  return (
    <Screen scrollable canGoBack>
      <Box alignItems='center'>
        <Text preset="headingLarge">
          {t('createAnAccount')}
        </Text>
        <Text preset="paragraphSmall" mb="s24">{t('logInDescription')}</Text>
      </Box>
      <FormTextInput
        control={control}
        name="name"
        autoCapitalize="words"
        label={t('yourName')}
        placeholder={t('typeYourName')}
        boxProps={{ mb: 's20' }}
      />
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder={t('typeYourEmail')}
        boxProps={{ mb: 's20' }}
      />
      <FormPasswordInput
        control={control}
        name="password"
        label={t('password')}
        placeholder={t('typeYourPassword')}
        boxProps={{ mb: 's20' }}
      />
      <FormPasswordInput
        control={control}
        name="confirmPassword"
        label={t('confirmPassword')}
        placeholder={t('typeYourPassword')}
        boxProps={{ mb: 's24' }}
      />
      <Button
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      
        title={t('createMyAccount')}
      />
    </Screen>
  );
}