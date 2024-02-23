/* eslint-disable prettier/prettier */
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RestaurentsNavigator } from "./restaurent.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingScreen } from "../../features/restaurents/screens/settings.screen";

const TAB_ICONS = {
  Restaurents: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICONS[route.name];
  return {
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={iconName} color={color} size={size} />
    ),
    tabBarInactiveTintColor: "gray",
    tabBarActiveTintColor: "tomato",
    headerShown: false,
  };
};
const Tabs = createBottomTabNavigator();

export const AppNavegator = ({}) => (
  <NavigationContainer>
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen name="Restaurents" component={RestaurentsNavigator} />
      <Tabs.Screen name="Map" component={MapScreen} />
      <Tabs.Screen name="Settings" component={SettingScreen} />
    </Tabs.Navigator>
  </NavigationContainer>
);
