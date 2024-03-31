import React from "react";
import { Image } from "react-native";
import emptyList from "../../assets/images/emptyList.png";
import { Box, Text, TextVariants } from "@components";
import { ThemeSpacing, } from "@theme";

interface Props {
    size?: number
    mt?: ThemeSpacing
    mb?: ThemeSpacing
    preset?: TextVariants;
}

export function EmptyList({ size = 100, mt, mb, preset = "paragraphCaption" }: Props) {

    return (
        <Box alignItems="center" alignContent="center" mt={mt} mb={mb}>
            <Image source={emptyList} style={{ height: size, width: size }} />
            <Text preset={preset}>Lista vazia</Text>
        </Box>
    );
}
