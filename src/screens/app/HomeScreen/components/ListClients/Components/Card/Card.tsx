import { Box, Icon, IconNames, Text, TouchableOpacityBox } from "@components";
import { ThemeColors } from "@theme";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ModalOptions } from "../ModalOptions/ModalOptions";
import { Client, enumStatus } from "@domain";
import { useClientsStore } from "@store";
import { ModalConfirmDelete } from "../ModalConfirmDelete/ModalConfirmDelete";
import { useNavigation } from "@react-navigation/native";
import { t } from "i18next";


interface getStatus {
    title: string
    color: ThemeColors
    icon: IconNames
}

export interface cardProps {
    client: Client
}

export function Card({ client }: cardProps) {
    const useClients = useClientsStore();
    const { navigate } = useNavigation();

    const [showModalOptions, setShowModalOptions] = useState<Boolean>();
    const [showModalConfirmDelete, setShowModalConfirmDelete] = useState<Boolean>();

    function getStatus(): getStatus {
        switch (client.status) {
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
                    color: 'yellowWarning',
                    icon: "minusSquare"
                }
            case enumStatus.noMovement:
                return {
                    title: 'Nenhuma pendência cadastrada',
                    color: 'greenPrimary',
                    icon: "tickSquare"
                }
        }
    }

    async function deleClient() {
        setShowModalOptions(!showModalOptions)
        setShowModalConfirmDelete(true)
    }

    function editClient() {
        setShowModalOptions(!showModalOptions);
        navigate("EditClient", { client: client });
    }

    return (
        <Box
            backgroundColor="background"
            borderRadius="s8"
            borderColor={getStatus().color}
            borderWidth={1}
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
                    onPress={() => setShowModalOptions(!showModalOptions)}
                />
            </Box>
            <Box padding="s10">
                <Box
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Text preset="headingSmall" bold>{client.name}</Text>
                    <Icon name={getStatus().icon} size={28} color={getStatus().color} />
                </Box>
                <Box height={1} backgroundColor="gray4" mt="s8" mb="s8" />
                <Box flexDirection="row" justifyContent="space-between">
                    {
                        client.status != enumStatus.noMovement ?? (
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
                        )
                    }

                    {
                        client.status == enumStatus.noMovement ? (
                            <Box alignItems="flex-end" flex={1}>
                                <TouchableOpacityBox
                                    flexDirection="row"
                                    borderRadius="s4"
                                    alignItems="center"
                                    paddingLeft="s8"
                                    paddingRight="s8"
                                    height={24}
                                    borderWidth={1}
                                    borderColor="buttonPrimary"
                                    onPress={() => navigate("RegisterPendency", { client: client })}
                                >
                                    <Icon name="dollarSquare" color="buttonPrimary" size={14} />
                                    <Text
                                        preset="paragraphSmall"
                                        ml="s4"
                                        color="buttonPrimary"
                                    >
                                        {t('registerPendency')}
                                    </Text>
                                </TouchableOpacityBox>
                            </Box>
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
            {
                showModalOptions && (
                    <ModalOptions
                        onClose={() => setShowModalOptions(!showModalOptions)}
                        onPressDeleteClient={() => deleClient()}
                        onPressEditClient={() => editClient()}
                        onPressViewDetails={() => { }}
                    />
                )
            }
            {
                showModalConfirmDelete && (
                    <ModalConfirmDelete
                        onCancel={() => setShowModalConfirmDelete(false)}
                        onPressConfirmDeleteClient={() => {
                            setShowModalConfirmDelete(false)
                            useClients.deleteClient(client.id)
                        }}
                    />
                )
            }

        </Box>
    )
}

const styles = StyleSheet.create({
    radius: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
    }
})