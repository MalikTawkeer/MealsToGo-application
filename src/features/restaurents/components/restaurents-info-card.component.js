import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 20px;
  font-weight: bold;
`;
const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

export const RestaurentInfoCard = ({ restaurent = {} }) => {
  const {
    name = "some restaurant",
    icon,
    photos = [
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
    ],

    address = "baba pora",
    isOpenNow = true,
    rating = 4,
    isClosedTemparerily,
  } = restaurent;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
