import { ActivityIndicator } from "react-native-paper";
import { FlatList } from "react-native";
import styled from "styled-components/native";

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const ProductList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const StyledActivity = styled(ActivityIndicator).attrs(({ theme }) => ({
  color: theme.colors.ui.primary,
}))``;
