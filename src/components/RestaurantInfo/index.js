import React from "react";
import { Text, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";

import open from "../../../assets/open";
import star from "../../../assets/star";

const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantCover = styled(Card.Cover)`
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  margin-bottom: ${(props) => props.theme.space[1]};
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const Address = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const Rating = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Section = styled.View`
  flex-direction: row;
  margin-bottom: ${(props) => props.theme.space[1]};
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

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
      <Title>{name}</Title>
      <Section>
        <Rating>
          {ratingArray.map((_, index) => (
            <SvgXml key={index.toString()} xml={star} width={20} height={20} />
          ))}
        </Rating>
        <SectionEnd>
          {isClosedTemporarily && (
            <Text variant="label" style={{ fontSize: 12, color: "red" }}>
              CLOSED TEMPORARILY
            </Text>
          )}
          {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
        </SectionEnd>
      </Section>

      <Address>{address}</Address>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
