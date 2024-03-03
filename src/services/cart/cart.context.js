import React, { createContext, useContext, useState } from "react";

import { AuthenticationContext } from "../authentication/authentication.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [restaurant, setRestaurant] = useState(null);
  const [cart, setCart] = useState([]);

  const add = (item, rst) => {
    if (!restaurant || restaurant.placeId !== rst.placeId) {
      setRestaurant(rst);
      setCart([item]);
    } else {
      setCart([...cart, item]);
    }
  };

  const clear = () => {
    setRestaurant(null);
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart: add,
        clearCart: clear,
        restaurant,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
