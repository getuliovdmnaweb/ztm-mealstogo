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
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
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

      <Address>{address}</Address>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
