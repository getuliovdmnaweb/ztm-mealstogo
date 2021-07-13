import React from "react";
import { SvgXml } from "react-native-svg";

import { Text } from "../../components/typography";
import open from "../../../assets/open";
import star from "../../../assets/star";

import {
  RestaurantCard,
  RestaurantCover,
  Section,
  Rating,
  Address,
  SectionEnd,
  Icon,
} from "./restaurant-info.styled";

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name,
    icon,
    photos,
    vicinity,
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCover source={{ uri: photos[0] }} />
      <Text variant="label">{name}</Text>
      <Section>
        <Rating>
          {ratingArray.map((_, index) => (
            <SvgXml key={index.toString()} xml={star} width={20} height={20} />
          ))}
        </Rating>
        <SectionEnd>
          {isClosedTemporarily && (
            <Text variant="error">CLOSED TEMPORARILY</Text>
          )}
          {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          <Icon source={{ uri: icon }} />
        </SectionEnd>
      </Section>

      <Address>{vicinity}</Address>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
