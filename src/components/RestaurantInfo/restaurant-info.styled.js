import styled from "styled-components/native";

import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestaurantCover = styled(Card.Cover)`
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const Address = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const Rating = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${(props) => props.theme.space[1]};
  margin-bottom: ${(props) => props.theme.space[1]};
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.Image`
  width: ${({ theme }) => theme.sizes[1]};
  height: ${({ theme }) => theme.sizes[1]};
`;
