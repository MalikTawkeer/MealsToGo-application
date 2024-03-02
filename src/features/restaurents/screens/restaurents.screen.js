/* eslint-disable prettier/prettier */
import React, { useContext, useState } from "react";
import { StatusBar, FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../../../features/restaurents/components/search.component";

import { ReastaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { LocationContext } from "../../../services/location/location.context";

import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurentInfoCard } from "../components/restaurents-info-card.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FadeInViewAnimation } from "../../../components/animations/fadein.animation";
import { Text } from "../../../typography/text.component";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  padding-top: 10px;
`;

const RestaurentList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  left: 50%;
  top: 50%;
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25%;
`;

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
