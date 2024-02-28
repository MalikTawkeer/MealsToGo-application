/* eslint-disable prettier/prettier */
import React, { useContext, useState } from "react";
import { StatusBar, FlatList, TouchableOpacity } from "react-native";
import { RestaurentInfoCard } from "../components/restaurents-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../../../features/restaurents/components/search.component";

import { ReastaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FadeInViewAnimation } from "../../../components/animations/fadein.animation";

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
  const { restaurants, isLoading } = useContext(ReastaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

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
    </SafeArea>
  );
};
