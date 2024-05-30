import React from 'react';

import { NavigatorScreenParams } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SettingsScreen, RegisterClients, EditClient, } from '@screens';

import {AppTabBottomTabParamList, AppTabNavigator} from './AppTabNavigator';
import { Client } from '@domain';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  SettingsScreen: undefined;
  RegisterClients: undefined;
  EditClient: { client: Client };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="AppTabNavigator">
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="RegisterClients" component={RegisterClients} />
      <Stack.Screen name="EditClient" component={EditClient} />
    </Stack.Navigator>
  );
}
