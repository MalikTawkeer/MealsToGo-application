import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurentsScreen } from "./src/features/restaurents/screens/restaurents.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurentsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
