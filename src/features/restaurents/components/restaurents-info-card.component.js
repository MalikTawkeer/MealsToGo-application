import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../typography/text.component";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Section = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const Rating = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const Open = styled(SvgXml)`
  align-items: flex-end;
`;

const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
export const RestaurentInfoCard = ({ restaurent = {} }) => {
  const {
    name = "some restaurant",
    icon = "https://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Restaurant-icon.png",
    photos = [
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
    ],

    address = "lane 2 of baba pora, ringath",
    isOpenNow = true,
    rating = 4,
    isClosedTemparerily = true,
  } = restaurent;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemparerily && (
              <Text variant="error">TEMPORARILY CLOSED</Text>
            )}
            <Spacer position="left" size="medium">
              {isOpenNow && <Open xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Text variant="body">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
