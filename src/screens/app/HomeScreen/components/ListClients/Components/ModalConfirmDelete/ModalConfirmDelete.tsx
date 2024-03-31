import React from 'react';
import { Modal, StyleSheet } from 'react-native';
import { Box, Text, TouchableOpacityBox } from '@components';

interface Props {
    onCancel: () => void;
    onPressConfirmDeleteClient: () => void;
}

export function ModalConfirmDelete({ onCancel, onPressConfirmDeleteClient }: Props) {
    return (
        <Modal animationType="slide" transparent={true} visible={true}>
            <TouchableOpacityBox style={styles.overlay} onPress={onCancel} />
            <Box flex={1} alignItems="center" justifyContent="center">
                <Box
                    width={300}
                    height={150}
                    borderRadius="s8"
                    backgroundColor='grayWhite'
                    padding="s10"
                >
                    <Text textAlign='center'>Tem certeza que deseja apagar cliente?</Text>
                    <Box flexDirection='row' alignItems="center" justifyContent="center">
                        <TouchableOpacityBox
                            onPress={onPressConfirmDeleteClient}
                            backgroundColor="greenPrimary"
                            paddingVertical="s8"
                            paddingHorizontal="s14"
                            borderRadius="s8"
                            mt="s20"
                            mr="s8"
                            width={100}
                            alignItems='center'
                        >
                            <Text preset="paragraphCaptionSmall" color="grayWhite">Confirmar</Text>
                        </TouchableOpacityBox>
                        <TouchableOpacityBox
                            onPress={onCancel}
                            backgroundColor="error"
                            paddingVertical="s8"
                            paddingHorizontal="s14"
                            borderRadius="s8"
                            mt="s20"
                            ml="s8"
                            alignItems='center'
                            width={100}
                        >
                            <Text preset="paragraphCaptionSmall" color="grayWhite">Cancelar</Text>
                        </TouchableOpacityBox>
                    </Box>
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
