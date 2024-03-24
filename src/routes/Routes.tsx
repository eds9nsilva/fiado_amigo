import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { useAuthStore } from '@store';
import { SplashScreen } from '../screens/app/SplashScreen/SplashScreen';

export function Router() {
  const authStore = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  return (
    <NavigationContainer>
      {loading ? (
        <SplashScreen />
      ) : authStore.token ? (
        <AppStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}