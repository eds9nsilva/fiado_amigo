import React from 'react';
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Box, BoxProps, TouchableOpacityBox, Icon, Text } from '@components';
import { useAppSafeArea, useAppTheme } from '@hooks';

import { ScrollViewContainer, ViewContainer } from './Components/ScreenContainer';
import { t } from 'i18next';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  ...boxProps
}: ScreenProps) {
  const { bottom, top } = useAppSafeArea();
  const { colors } = useAppTheme();
  const navigation = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <>
    <StatusBar backgroundColor={colors.background} barStyle={'dark-content'}/>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{ paddingTop: top, paddingBottom: bottom }, style]}
          {...boxProps}>
          {canGoBack && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              mb="s24"
              mt="s10"
              flexDirection="row">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold ml="s8">
                {t('toGoBack')}
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView></>
  );
}