/* eslint-disable prettier/prettier */
import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { MD2Colors } from "react-native-paper";

import { Search } from "../../../features/restaurents/components/search.component";
import {
  RestaurentList,
  SafeArea,
  LoadingContainer,
  Loading,
} from "../components/restaurant-list.styles";

import { ReastaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { LocationContext } from "../../../services/location/location.context";

import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurentInfoCard } from "../components/restaurents-info-card.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FadeInViewAnimation } from "../../../components/animations/fadein.animation";
import { Text } from "../../../typography/text.component";

export const RestaurentsScreen = ({ navigation }) => {
  const {
    restaurants,
    isLoading,
    error: restaurantError,
  } = useContext(ReastaurantsContext);
  const { error: locationError } = useContext(LocationContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  const hasError = !!restaurantError || !!locationError;

  return (
    <SafeArea>
      <Search
        isFavouriteToggled={isToggled}
        onFavouriteToggle={() => setIsToggled(!isToggled)}
      />
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue300} />
        </LoadingContainer>
      )}
      {isToggled && (
        <FavouritesBar favourites={favourites} onNavigate={navigation} />
      )}
      {hasError && (
        <Spacer position="left" size="large">
          <Text position="left" variant="error">
            Something went wrong retriving restaurants{" "}
          </Text>
        </Spacer>
      )}
      {!hasError && (
        <RestaurentList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <Spacer position="bottom" size="large">
                  <FadeInViewAnimation>
                    <RestaurentInfoCard restaurent={item} />
                  </FadeInViewAnimation>
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
