import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { RestaurentsScreen } from "./src/features/restaurents/screens/restaurents.screen";
import { MapScreen } from "./src/features/restaurents/screens/map.screen";
import { SettingScreen } from "./src/features/restaurents/screens/settings.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ReastaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

const TAB_ICONS = {
  Restaurents: "restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICONS[route.name];
  console.log(iconName);
  return {
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={iconName} color={color} size={size} />
    ),
    tabBarInactiveTintColor: "gray",
    tabBarActiveTintColor: "tomato",
  };
};

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

  const Tabs = createBottomTabNavigator();
  return (
    <>
      <ThemeProvider theme={theme}>
        <ReastaurantsContextProvider>
          <NavigationContainer>
            <Tabs.Navigator screenOptions={screenOptions}>
              <Tabs.Screen name="Restaurents" component={RestaurentsScreen} />
              <Tabs.Screen name="Map" component={MapScreen} />
              <Tabs.Screen name="Settings" component={SettingScreen} />
            </Tabs.Navigator>
          </NavigationContainer>
        </ReastaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
