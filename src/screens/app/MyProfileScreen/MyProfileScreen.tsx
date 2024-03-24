import React from "react";
import { Screen, Text, TouchableOpacityBox } from "@components";
import { useAuthStore } from "@store";

export function MyProfileScreen() {
const auth =  useAuthStore()
    return (
        <Screen>
            <Text>MyProfileScreen</Text>
            <TouchableOpacityBox 
                alignItems="center"
                height={30}
                backgroundColor="buttonPrimary"
                onPress={() => auth.logout(auth.rememberMe)}
            >
                <Text>SAIR</Text>
            </TouchableOpacityBox>
        </Screen>
    )
}