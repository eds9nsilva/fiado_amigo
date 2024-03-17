import React from "react";
import { theme } from './src/theme';
import { Router } from "./src/routes/Routes";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

import './src/translate/index';
import { inicializeStorage } from "./src/services/storage/storageService";
import { mmkvStorage } from "./src/services/storage/mmkvStorage";

inicializeStorage(mmkvStorage)

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App;
