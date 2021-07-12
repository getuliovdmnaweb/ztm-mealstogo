import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";
import { ThemeProvider } from "styled-components/native";

import { ListRestaurants } from "./src/screens";
import { theme } from "./src/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ListRestaurants />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
