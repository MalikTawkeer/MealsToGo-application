import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Rating,
  SectionEnd,
  Open,
  Icon,
} from "./restaurents-info-card-styles";
import { Favourite } from "../../../components/favourites/favourite.component";
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
    isClosedTemporarily = "TEMPORARILY CLOSED",
  } = restaurent;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5} key={name}>
      <Favourite restaurant={restaurent} />
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">{isClosedTemporarily}</Text>
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
