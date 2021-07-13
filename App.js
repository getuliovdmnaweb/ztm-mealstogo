import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";

import { TabNavigator } from "./src/navigators";
import { theme } from "./src/theme";
import { RestaurantsProvider } from "./src/services/restaurants/context";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <RestaurantsProvider>
          <ThemeProvider theme={theme}>
            <TabNavigator />
          </ThemeProvider>
        </RestaurantsProvider>
        <ExpoStatusBar style="auto" />
      </NavigationContainer>
    </>
  );
}
