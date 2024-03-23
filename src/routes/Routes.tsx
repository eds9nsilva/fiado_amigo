import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { useAuthStore } from '@store';

export function Router() {
  const authStore = useAuthStore();
  console.log(authStore.user)
  
  return (
    <NavigationContainer>
      {authStore.token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
