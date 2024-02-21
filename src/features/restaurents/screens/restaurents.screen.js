/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import { StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurentInfoCard } from "../components/restaurents-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ReastaurantsContext } from "../../../services/restaurants/restaurants.context";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[1]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurentList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurentsScreen = () => {
  const { restaurants, error, isLoading } = useContext(ReastaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurentList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurentInfoCard restaurent={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
