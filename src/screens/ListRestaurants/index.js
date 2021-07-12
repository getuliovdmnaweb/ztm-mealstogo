import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../../components";

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ProductList = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const ListRestaurants = () => {
  return (
    <Container>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <ProductList>
        <RestaurantInfo />
      </ProductList>
    </Container>
  );
};

export default ListRestaurants;
