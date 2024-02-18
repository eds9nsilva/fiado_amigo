import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { Text, Screen, FormTextInput, FormPasswordInput, Box, Button } from "@components";

import { SimpleLogo } from "@brand";
import { LoginSchema, loginSchema } from "./LoginSchema";

export function LoginScreen() {
    const { t } = useTranslation();
    const { control, formState, handleSubmit } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
    });
    return (
        <Screen scrollable>
            <Box alignItems="center" mt="s40" mb="s48">
                <SimpleLogo width={300} />
                <Text preset="headingMedium" semiBold mb="s8" mt="s32">{t('logIn')}</Text>
                <Text preset="paragraphSmall">{t('logInDescription')}</Text>
            </Box>
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
            <Text
                onPress={() => { }}
                color="primary"
                preset="paragraphSmall"
                bold>
                {t('forgotMyPassword')}
            </Text>
            <Button
                onPress={() => { }}
                disabled={!formState.isValid}
                marginTop="s40"
                title={t('toEnter')}
            />

            <Button
                preset="secondary"
                marginTop="s12"
                title={t('createAnAccount')}
                onPress={() => { }}
            />
        </Screen>
    )
}