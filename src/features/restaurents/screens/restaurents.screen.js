/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, View, Text, StatusBar, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurentInfoCard } from "../components/restaurents-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 20px;
  background-color: blue;
`;

export const RestaurentsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurentInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
