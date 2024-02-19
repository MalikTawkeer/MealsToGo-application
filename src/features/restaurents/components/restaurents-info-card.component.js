import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-size: ${(props) => props.theme.sizes[1]};
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
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

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
