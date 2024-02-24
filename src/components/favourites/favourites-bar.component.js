import React from "react";
import styled from "styled-components";
import { ScrollView, TouchableOpacity } from "react-native";

import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (favourites.length === 0) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer position="left" size="medium">
        <Text>Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          return (
            <TouchableOpacity
              key={restaurant.name}
              onPress={() =>
                onNavigate.navigate("RestaurantDetail", { restaurant })
              }
            >
              <Spacer key={restaurant.name} position="left" size="medium">
                <CompactRestaurantInfo restaurant={restaurant} />
              </Spacer>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
