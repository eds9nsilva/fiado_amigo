import React from 'react';


import {Button, Icon, Screen, Text} from '@components';
import { AuthScreenProps } from '@routes';


export function SuccessScreen({route, navigation}:  AuthScreenProps<'SuccessScreen'>) {
  function goBackToBegin() {
    navigation.canGoBack()
  }
  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text mt="s16" preset="paragraphLarge">
        {route.params.description}
      </Text>
      <Button onPress={goBackToBegin} mt="s40" title="Voltar ao início" />
    </Screen>
  );
}
