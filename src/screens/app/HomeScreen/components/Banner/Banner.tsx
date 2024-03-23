import { Box, Icon, Text, TouchableOpacityBox } from "@components";
import React from "react";
import { StyleSheet } from "react-native";

export function Banner() {
    return (
        <Box
            height={166}
            backgroundColor="buttonPrimary"
            borderRadius="s8"
            padding="s20"
            justifyContent="space-between"
            alignContent="center"
            alignItems="center"
            style={styles.shadowProp}
        >
            <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box>
                    <Text
                        color="grayWhite"
                        preset="headingMedium"
                    >
                        R$ 12.00,00
                    </Text>
                    <Text
                        color="grayWhite"
                        preset="paragraphSmall"
                    >
                        Total de pendências
                    </Text>
                </Box>
                <Box width={46} />
                <Box alignItems="flex-end">
                    <Text
                        color="grayWhite"
                        preset="headingSmall"
                    >
                        R$ 600,00
                    </Text>
                    <Text
                        color="grayWhite"
                        preset="paragraphSmall"
                    >
                        Maior pendência
                    </Text>
                </Box>
            </Box>
            <Box alignItems="flex-start" width={'100%'}>
                <Text preset="paragraphCaptionSmall" color="grayWhite" ml="s4">Cadastros e relátorio</Text>
            </Box>
            <Box flexDirection="row" alignItems="center" alignContent="center">

                {CardsBanner({
                    children: <Icon name="userEdit" size={26} color="greenPrimary" />,
                    text: 'Clientes',
                    onPress: () => { }
                })}
                {CardsBanner({
                    children: <Icon name="dollarSquare" size={26} color="greenPrimary" />,
                    text: 'Pendências',
                    onPress: () => { }
                })}
                {CardsBanner({
                    children: <Icon name="shopAdd" size={26} color="greenPrimary" />,
                    text: 'Produtos',
                    onPress: () => { }
                })}
                {CardsBanner({
                    children: <Icon name="statusUp" size={26} color="greenPrimary" />,
                    text: 'Relatorio',
                    onPress: () => { }
                })}
            </Box>
        </Box>
    )
}

interface PropsCardsBanner {
    children: React.ReactElement
    text: string
    onPress: () => void
}

function CardsBanner({ children, text, onPress }: PropsCardsBanner) {
    return (
        <Box alignItems="center">
            <TouchableOpacityBox
                height={38}
                width={68}
                backgroundColor="background"
                ml="s4"
                mr="s4"
                mb="s4"
                borderRadius="s8"
                alignItems="center"
                justifyContent="center"
                onPress={onPress}
            >
                {children}
            </TouchableOpacityBox>
            <Text
                color="grayWhite"
                preset="paragraphCaptionSmall"
            >
                {text}
            </Text>
        </Box>
    )
}

const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})