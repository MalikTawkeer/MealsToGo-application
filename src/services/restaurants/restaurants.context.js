import { React, createContext, useState, useEffect, useMemo } from "react";
import { restaurentsService, restaurantTransform } from "./restaurants.service";

export const ReastaurantsContext = createContext();

export const ReastaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const retriveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurentsService()
        .then(restaurantTransform)
        .then((response) => {
          setRestaurants(response);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retriveRestaurants();
  }, []);
  return (
    <ReastaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </ReastaurantsContext.Provider>
  );
};
