import React from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useResetNavigationSuccess } from '@hooks';
import { Button, FormTextInput, Screen, Text } from '@components';

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';
import { t } from 'i18next';

export function ForgotPasswordScreen() {
  const { reset } = useResetNavigationSuccess();

  const { control, formState, handleSubmit } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  function submitForm() {
    reset({
      title: 'Enviamos as instruções para seu e-mail',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'arrowLeft',
        color: 'primary',
      },
    });
  }
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        {t('forgotMyPassword')}
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        {t('forgotMyPasswordDescription')}
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder={t('typeYourEmail')}
        boxProps={{ mb: 's40' }}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title={t('recoverPassword')}
      />
    </Screen>
  );
}
