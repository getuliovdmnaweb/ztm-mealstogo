import React, { createContext, useState, useEffect } from "react";
import { restaurantsRequest, restaurantsTransform } from "./service";

export const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loadingRestaurants, setLoadingRestaurants] = useState(false);
  const [errorRestaurants, setErrorRestaurants] = useState("");

  const fetchRestaurants = () => {
    setLoadingRestaurants(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((results) => {
          setLoadingRestaurants(false);
          setRestaurants(results);
        })
        .catch((error) => {
          setLoadingRestaurants(false);
          setErrorRestaurants(error);
        });
    }, 2000);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        loadingRestaurants,
        errorRestaurants,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
