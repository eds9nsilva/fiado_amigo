import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Text, Screen, FormTextInput, FormPasswordInput, Box, Button } from "@components";

import { SimpleLogo } from "@brand";
import { LoginSchema, loginSchema } from "./LoginSchema";
import { AuthScreenProps } from "@routes";

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {

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

    return (
        <Screen scrollable>
            <Box alignItems="center" mt="s40" mb="s48">
                <SimpleLogo width={300} />
                <Text preset="headingMedium" semiBold mb="s8" mt="s32">{('logIn')}</Text>
                <Text preset="paragraphSmall">{('logInDescription')}</Text>
            </Box>
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
            <Text
                onPress={navigateToForgotPasswordScreen}
                color="primary"
                preset="paragraphSmall"
                bold>
                {('forgotMyPassword')}
            </Text>
            <Button
                onPress={() => { }}
                disabled={!formState.isValid}
                marginTop="s40"
                title={('toEnter')}
            />

            <Button
                onPress={navigateToSignUpScreen}
                preset="secondary"
                marginTop="s12"
                title={('createAnAccount')}
            />
        </Screen>
    )
}