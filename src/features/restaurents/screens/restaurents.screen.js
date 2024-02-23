/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import { StatusBar, FlatList, TouchableOpacity } from "react-native";
import { RestaurentInfoCard } from "../components/restaurents-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ReastaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../../../features/restaurents/components/search.component";

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
  const { restaurants, error, isLoading } = useContext(ReastaurantsContext);
  return (
    <SafeArea>
      <Search />
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue300} />
        </LoadingContainer>
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
                <RestaurentInfoCard restaurent={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
