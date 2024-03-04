import React, { createContext, useContext, useState, useEffect } from "react";

import { AuthenticationContext } from "../authentication/authentication.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [restaurant, setRestaurant] = useState(null);
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (!cart.length) {
      setSum(0);
      return;
    }
    const newSum = cart.reduce((acc, { price }) => {
      return (acc += price);
    }, 0);
    setSum(newSum);
  }, [cart]);

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
        sum
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
