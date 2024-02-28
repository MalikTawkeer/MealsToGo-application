import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { RestaurentInfoCard as FavRestaurentInfoCard } from "../../restaurents/components/restaurents-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../typography/text.component";
import { FadeInViewAnimation } from "../../../components/animations/fadein.animation";

const FavouritesList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const NoFavContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.space[2]};
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeArea>
      {favourites.length === 0 ? (
        <NoFavContainer>
          <Text variant="error">!!OOps, You Have No Favourites Yet.</Text>
        </NoFavContainer>
      ) : (
        <FavouritesList
          data={favourites}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <Spacer position="top" size="large">
                  <FadeInViewAnimation>
                    <FavRestaurentInfoCard restaurent={item} />
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
