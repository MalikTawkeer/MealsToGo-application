/* eslint-disable prettier/prettier */
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ReastaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { CartContextProvider } from "../../services/cart/cart.context";

import { RestaurentsNavigator } from "./restaurent.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { CheckoutNavigator } from "./checkout.navigator";

import { SettingsNavigator } from "./settings.navigator";
const TAB_ICONS = {
  Restaurents: "restaurant",
  Checkout: "cart",
  Map: "map",
  Settings: "settings",
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
  <FavouritesContextProvider>
    <LocationContextProvider>
      <ReastaurantsContextProvider>
        <CartContextProvider>
          <Tabs.Navigator screenOptions={screenOptions}>
            <Tabs.Screen name="Restaurents" component={RestaurentsNavigator} />
            <Tabs.Screen name="Checkout" component={CheckoutNavigator} />
            <Tabs.Screen name="Map" component={MapScreen} />
            <Tabs.Screen name="Settings" component={SettingsNavigator} />
          </Tabs.Navigator>
        </CartContextProvider>
      </ReastaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
