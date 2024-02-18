import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurentsScreen } from "./src/features/restaurents/screens/restaurents.screen";

export default function App() {
  return (
    <>
      <RestaurentsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
