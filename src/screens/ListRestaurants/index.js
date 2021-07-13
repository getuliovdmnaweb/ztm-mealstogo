import React, { useContext } from "react";

import { Searchbar } from "react-native-paper";

import { RestaurantInfo } from "../../components";
import { SafeArea } from "../../components/utils";
import { RestaurantsContext } from "../../services/restaurants/context";
import {
  SearchContainer,
  ProductList,
  StyledActivity,
} from "./list-restaurants.styled";

const ListRestaurants = () => {
  const { loadingRestaurants, error, restaurants } =
    useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      {loadingRestaurants ? (
        <StyledActivity animating={true} size={50} />
      ) : (
        <ProductList
          keyExtractor={(item) => item.name.toString()}
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
        />
      )}
    </SafeArea>
  );
};

export default ListRestaurants;
