import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [restaurant, setRestaurant] = useState(null);
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState(0);

  const addRst = async (rst) => {
    if (restaurant) {
      await AsyncStorage.setItem(
        `${user.uid}-cart-restaurant`,
        JSON.stringify(rst)
      );
      console.log("RST_Done");
    }
  };

  const addCrt = async () => {
    if (cart) {
      await AsyncStorage.setItem(`${user.uid}-cart`, JSON.stringify(cart));
      console.log("CRT_Done");
    }
  };

  const retriveRstInfo = async () => {
    const rst = await AsyncStorage.getItem(`${user.uid}-cart-restaurant`);
    if (rst.length > 0) {
      setRestaurant(JSON.parse(rst));
      console.log(rst);
    }
  };
  const retriveCartInfo = async () => {
    const crt = await AsyncStorage.getItem(`${user.uid}-cart`);
    if (crt.length > 0) {
      setCart(JSON.parse(crt));
    }
  };

  //retrive cart info from storage
  useEffect(() => {
    retriveRstInfo();
    retriveCartInfo();
  }, []);

  
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
      addRst(rst); // to async storage
      addCrt(cart); // to async storage
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
        sum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
