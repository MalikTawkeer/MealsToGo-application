import React from "react";
import { Text } from "react-native";
import { Callout } from "react-native-maps";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

export const MapCallout = ({ restaurent }) => {
  return <CompactRestaurantInfo restaurant={restaurent} />;
};
