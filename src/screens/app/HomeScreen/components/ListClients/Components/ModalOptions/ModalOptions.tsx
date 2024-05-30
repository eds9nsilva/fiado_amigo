import React, { useState } from 'react';
import { Modal, StyleSheet } from 'react-native';
import { Box, Button, Text, TouchableOpacityBox } from '@components';

interface Props {
    onClose: () => void;
    onPressDeleteClient: () => void;
    onPressViewDetails: () => void;
    onPressEditClient: () => void;
}

export function ModalOptions({ onClose, onPressDeleteClient, onPressViewDetails, onPressEditClient }: Props) {
    return (
        <Modal animationType="slide" transparent={true} visible={true}>
            <TouchableOpacityBox style={styles.overlay} onPress={onClose} />
            <Box flex={1} alignItems="center" justifyContent="center">
                <Box
                    width={200}
                    height={200}
                    borderRadius="s8"
                    backgroundColor='grayWhite'
                    padding="s14"
                >
                    <Box alignItems="center" mb="s12">
                        <Text preset="paragraphMedium">Opções para cliente</Text>
                    </Box>
                    <TouchableOpacityBox onPress={onPressViewDetails}>
                        <Text preset="paragraphMedium" color="greenPrimary">Ver detalhes</Text>
                    </TouchableOpacityBox>
                    <Box height={2} backgroundColor="gray5" mt="s4" mb="s4" />
                    <TouchableOpacityBox onPress={onPressEditClient}>
                        <Text preset="paragraphMedium" color="greenPrimary">Editar</Text>
                    </TouchableOpacityBox>
                    <Box height={2} backgroundColor="gray5" mt="s4" mb="s4" />
                    <TouchableOpacityBox onPress={onPressDeleteClient}>
                        <Text preset="paragraphMedium" color="greenPrimary">Apagar</Text>
                    </TouchableOpacityBox>
                    <Box height={2} backgroundColor="gray5" mt="s4" mb="s4" />
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
