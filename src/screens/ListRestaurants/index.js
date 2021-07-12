import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../../components";
import { StatusBar } from "react-native";

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
  background-color: gray;
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const ProductList = styled.View`
  flex: 1;
  padding: 16px;
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
