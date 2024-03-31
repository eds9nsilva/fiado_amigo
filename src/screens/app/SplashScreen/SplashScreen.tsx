import React from "react";
import { SimpleLogo } from "@brand";
import { ActivityIndicator, Box, Screen } from "@components";

export function SplashScreen() {
    return (
        <Screen
            flex={1}
            backgroundColor="greenPrimary"
            barStyle="light-content"
            alignItems="center"
        >
            <Box style={{marginTop: '60%'}} mb="s32">            
                <SimpleLogo color="grayWhite" width={300} />
            </Box>
            <ActivityIndicator color="grayWhite" />
        </Screen>
    )
}