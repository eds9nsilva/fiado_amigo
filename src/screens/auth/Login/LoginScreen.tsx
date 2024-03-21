import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Text, Screen, FormTextInput, FormPasswordInput, Box, Button, CheckBox, TouchableOpacityBox } from "@components";
import { SimpleLogo } from "@brand";
import { LoginSchema, loginSchema } from "./LoginSchema";
import { AuthScreenProps } from "@routes";
import { t } from 'i18next';
import { useAuthStore } from "@store";
import { useAppTheme } from "@hooks";

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
    const authStore = useAuthStore();
    const { colors } = useAppTheme();

    const { control, formState, handleSubmit } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    function navigateToSignUpScreen() {
        navigation.navigate('SignUpScreen');
    }

    function navigateToForgotPasswordScreen() {
        navigation.navigate('ForgotPasswordScreen');
    }

    function handlerRememberMe() {
        authStore.setRememberMe(!authStore.rememberMe)
    }

    async function submitLogin(data: LoginSchema) {
        authStore.login(data);
    }

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
            <Box flexDirection="row" justifyContent="space-between">
                <TouchableOpacityBox 
                    flexDirection="row" 
                    alignItems="center"
                    onPress={handlerRememberMe}
                >
                    <CheckBox isChecked={authStore.rememberMe} />
                    <Text
                        color="primary"
                        preset="paragraphSmall"
                        ml="s8"
                        bold>
                        {t('rememberMe')}
                    </Text>
                </TouchableOpacityBox>
                <Text
                    onPress={navigateToForgotPasswordScreen}
                    color="primary"
                    preset="paragraphSmall"
                    bold>
                    {t('forgotMyPassword')}
                </Text>
            </Box>
            <Button
                onPress={handleSubmit(submitLogin)}
                disabled={!formState.isValid}
                marginTop="s40"
                loading={authStore.loading}
                title={t('toEnter')}
            />

            <Button
                onPress={navigateToSignUpScreen}
                preset="secondary"
                marginTop="s12"
                title={t('createAnAccount')}
            />
        </Screen>
    )
}