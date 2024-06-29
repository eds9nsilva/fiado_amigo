import React from 'react';
import { FlatList, ListRenderItem, Modal, StyleSheet } from 'react-native';
import { Box, EmptyList, Text, TouchableOpacityBox } from '@components';
import { useClientsStore } from '@store';
import { Client } from '@domain';

interface Props {
    onClose: () => void;
    onPressSelectClient: (client: Client) => void;
}

export function ModalSelectClient({ onClose, onPressSelectClient }: Props) {
    const { clients } = useClientsStore();

    const renderItems: ListRenderItem<Client> = ({ item }) => {
        return (
            <>
                <TouchableOpacityBox marginTop='s10' marginBottom='s10' onPress={() => onPressSelectClient(item)}>
                    <Text numberOfLines={1} >{item.name}</Text>
                </TouchableOpacityBox>
                <Box height={2} backgroundColor="gray5" />
            </>

        );
    };

    return (
        <Modal animationType="slide" transparent={true} visible={true}>
            <TouchableOpacityBox style={styles.overlay} onPress={onClose} />
            <Box flex={1} alignItems="center" justifyContent="center" pl='s10' pr='s10'>
                <Box
                    width={350}
                    height={500}
                    borderRadius="s8"
                    backgroundColor='grayWhite'
                    padding="s14"
                >
                    <Box alignItems="center" mb="s12">
                        <Text preset="paragraphMedium">Selecionar Cliente</Text>
                    </Box>

                    <Box height={380}>
                        <FlatList
                            data={clients}
                            renderItem={renderItems}
                            ListEmptyComponent={<EmptyList size={200} preset="headingMedium" mt="s24" />}
                            contentContainerStyle={{ bottom: 10 }}
                            keyExtractor={item => String(item.id)}
                        />
                    </Box>
                    <TouchableOpacityBox
                        onPress={onClose}
                        backgroundColor="error"
                        paddingVertical="s8"
                        paddingHorizontal="s14"
                        borderRadius="s8"
                        mt="s20"
                        style={styles.touchableOpacityBox}
                    >
                        <Text preset="paragraphCaptionSmall" color="grayWhite">Cancelar</Text>
                    </TouchableOpacityBox>
                </Box>
            </Box>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    touchableOpacityBox: {
        position: 'absolute',
        bottom: 14,
        right: 14
    }
})
