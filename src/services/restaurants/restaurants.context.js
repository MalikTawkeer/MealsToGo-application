import {
  React,
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
} from "react";
import { restaurentsService, restaurantTransform } from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const ReastaurantsContext = createContext();

export const ReastaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { location } = useContext(LocationContext);

  const retriveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);

    restaurentsService(loc)
      .then(restaurantTransform)
      .then((response) => {
        setError("");
        setRestaurants(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      console.log("KKs", locationString);
      retriveRestaurants(locationString);
    }
  }, [location]);
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
