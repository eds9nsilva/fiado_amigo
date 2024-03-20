import React from "react";
import { theme } from './src/theme';
import { Router } from "./src/routes/Routes";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

import './src/translate/index';
import { inicializeStorage } from "./src/storage/storageService";
import { mmkvStorage } from "./src/storage/mmkvStorage";
import Toast from 'react-native-toast-notifications'
import { Platform } from "react-native";
import { ToastType } from "src/@types";

inicializeStorage(mmkvStorage)

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Toast
          style={{ marginTop: Platform.OS === 'ios' ? 40 : 0 }}
          ref={ref => ((global as ToastType)['toast'] = ref)}
          placement="top"
          textStyle={{ fontSize: 16 }}
          successColor="#28a745"
          dangerColor="#d0383e"
          warningColor="#ffc107"
        />
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App;
