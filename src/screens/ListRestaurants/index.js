import React from "react";

import { Searchbar } from "react-native-paper";

import { RestaurantInfo } from "../../components";

import {
  Container,
  SearchContainer,
  ProductList,
} from "./list-restaurants.styled";

const ListRestaurants = () => {
  return (
    <Container>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <ProductList
        keyExtractor={(item) => item.name.toString()}
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
        renderItem={() => <RestaurantInfo />}
      />
    </Container>
  );
};

export default ListRestaurants;
