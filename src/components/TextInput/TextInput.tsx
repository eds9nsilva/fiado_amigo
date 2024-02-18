import React, { useRef } from 'react';
import {
    Pressable,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
    TextStyle,
} from 'react-native';

import { useAppTheme } from '@hooks';

import { Box, BoxProps } from '../Box/Box';
import { $fontFamily, $fontSizes, Text } from '../Text/Text';
export interface TextInputProps extends RNTextInputProps {
    label: string;
    errorMessage?: string;
    RightComponent?: React.ReactElement;
    boxProps?: BoxProps;
}

export function TextInput({
    label,
    errorMessage,
    RightComponent,
    boxProps,
    ...rnTextInputProps
}: TextInputProps) {
    const { colors } = useAppTheme();
    const inputRef = useRef<RNTextInput>(null);

    const $textInputContainer: BoxProps = {
        flexDirection: 'row',
        borderWidth: errorMessage ? 2 : 1,
        borderColor: errorMessage ? 'error' : 'gray1',
        padding: 's16',
        borderRadius: 's8',
        backgroundColor: 'secundaryBackground'
    };

    function focusInput() {
        inputRef.current?.focus();
    }

    return (
        <Box {...boxProps}>
            <Pressable onPress={focusInput}>
                <Text mb="s4" preset="paragraphMedium">
                    {label}
                </Text>
                <Box {...$textInputContainer}>
                    <RNTextInput
                        autoCapitalize="none"
                        ref={inputRef}
                        style={$textInputStyle}
                        placeholderTextColor={colors.gray2}
                        {...rnTextInputProps}
                    />
                    {RightComponent && (
                        <Box justifyContent="center" ml="s16">
                            {RightComponent}
                        </Box>
                    )}
                </Box>
                {errorMessage && (
                    <Text color={'error'} preset="paragraphSmall" bold>
                        {errorMessage}
                    </Text>
                )}
            </Pressable>
        </Box>
    );
}

const $textInputStyle: TextStyle = {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    fontFamily: $fontFamily.regular,
    ...$fontSizes.paragraphMedium,
};
