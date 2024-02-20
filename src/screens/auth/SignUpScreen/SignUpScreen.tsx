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
import { useTranslation } from 'react-i18next';

const defaultValues: SignUpSchema = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export function SignUpScreen() {
  const { reset } = useResetNavigationSuccess();
  const { t } = useTranslation();

  const { control, formState, handleSubmit } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues,
    mode: 'onChange',
  });

  function submitForm() {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'directBox',
        color: 'success',
      },
    });
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
        contextMenuHidden
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