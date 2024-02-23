import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurentsScreen } from "../../features/restaurents/screens/restaurents.screen";
import { RestaurantDetailScreen } from "../../features/restaurents/screens/restaurant.detail.screen";

const RestaurentsStack = createStackNavigator();

export const RestaurentsNavigator = () => {
  return (
    <RestaurentsStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <RestaurentsStack.Screen
        name="Restaurants"
        component={RestaurentsScreen}
      />
      <RestaurentsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurentsStack.Navigator>
  );
};
