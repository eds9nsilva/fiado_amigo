import { Box, Icon, IconNames, Text, TouchableOpacityBox } from "@components";
import { ThemeColors } from "@theme";
import React from "react";
import { StyleSheet } from "react-native";

export enum enumStatus {
    'late',
    'paid',
    'closeToWin'
}

interface getStatus {
    title: string
    color: ThemeColors
    icon: IconNames
}

export interface cardProps {
    status: enumStatus,
    name: string
}

export function Card({ status, name }: cardProps) {

    function getStatus(): getStatus {
        switch (status) {
            case enumStatus.late:
                return {
                    title: 'Pendências atrasadas',
                    color: 'error',
                    icon: "closeSquare"
                }
            case enumStatus.paid:
                return {
                    title: 'Pendências pagas',
                    color: 'greenPrimary',
                    icon: "tickSquare"
                }

            case enumStatus.closeToWin:
                return {
                    title: 'Pendências perto de vencer',
                    color: 'yelloWarning',
                    icon: "minusSquare"
                }
        }
    }

    return (
        <Box
            style={styles.shadowProp}
            backgroundColor="background"
            borderRadius="s8"
            mt="s10"
        >
            <Box
                height={40}
                backgroundColor={getStatus().color}
                style={styles.radius}
                alignItems="center"
                flexDirection="row"
                padding="s10"
                justifyContent="space-between"
            >
                <Text
                    preset="paragraphSmall"
                    color="grayWhite"
                >
                    {getStatus().title}
                </Text>
                <Icon
                    name="more"
                    color="grayWhite"
                    size={32}
                    onPress={() => { }}
                />
            </Box>
            <Box padding="s10">
                <Box
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Text preset="headingSmall" bold>{name}</Text>
                    <Icon name={getStatus().icon} size={28} color={getStatus().color} />
                </Box>
                <Box height={1} backgroundColor="gray4" mt="s8" mb="s8" />
                <Box flexDirection="row" justifyContent="space-between">
                    {
                        status != enumStatus.paid ? (
                            <Box flexDirection="row" alignItems="center">
                                <Icon name="calendar" color="redError" />
                                <Text
                                    preset="paragraphSmall"
                                    ml="s4"
                                    color="redError"
                                >
                                    Vencimento: 10/11/2024
                                </Text>
                            </Box>
                        ) : (
                            <Box flexDirection="row" alignItems="center">
                                <Icon name="calendar" color="greenPrimary" />
                                <Text
                                    preset="paragraphSmall"
                                    ml="s4"
                                    color="greenPrimary"
                                >
                                    Pagamento: 10/11/2024
                                </Text>
                            </Box>
                        )
                    }

                    {
                        status != enumStatus.paid ? (
                            <TouchableOpacityBox
                                flexDirection="row"
                                borderRadius="s4"
                                alignItems="center"
                                paddingLeft="s8"
                                paddingRight="s8"
                                height={24}
                                borderWidth={1}
                                borderColor="buttonPrimary"
                            >
                                <Icon name="dollarSquare" color="buttonPrimary" size={14} />
                                <Text
                                    preset="paragraphSmall"
                                    ml="s4"
                                    color="buttonPrimary"
                                >
                                    Pagar
                                </Text>
                            </TouchableOpacityBox>
                        ) : (
                            <Box flexDirection="row" alignItems="center">
                                <Icon name="cup" color="greenPrimary" size={20} />
                                <Text
                                    preset="paragraphSmall"
                                    ml="s4"
                                    color="buttonPrimary"
                                >
                                    Contas pagas
                                </Text>
                            </Box>
                        )
                    }

                </Box>
            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    radius: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    }
})