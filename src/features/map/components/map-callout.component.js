import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

export const MapCallout = ({ restaurent }) => {
  return <CompactRestaurantInfo isMap restaurant={restaurent} />;
};
