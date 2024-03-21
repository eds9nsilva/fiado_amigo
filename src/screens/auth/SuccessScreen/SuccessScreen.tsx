import React from 'react';


import { Box, Button, Icon, Screen, Text } from '@components';
import { AuthScreenProps } from '@routes';
import { t } from 'i18next';


export function SuccessScreen({ route, navigation }: AuthScreenProps<'SuccessScreen'>) {
  function goBackToBegin() {
    navigation.navigate('LoginScreen')
  }
  return (
    <Screen>
      <Box mt='s16'>
        <Icon {...route.params.icon} size={48} />
      </Box>
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text mt="s16" preset="paragraphLarge">
        {route.params.description}
      </Text>
      <Button onPress={goBackToBegin} mt="s40" title={t('backToStart')} />
    </Screen>
  );
}
