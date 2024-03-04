import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { CreditCardInput } from "../components/credit-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../typography/text.component";
import { RestaurentInfoCard } from "../../restaurents/components/restaurents-info-card.component";
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
} from "../components/checkout.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

import { CartContext } from "../../../services/cart/cart.context";

import { payRequest } from "../../../services/checkout/checkout.service";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);

  const onPay = () => {
    if (!card || !card.id) {
      console.log(card);
      return;
    }
    payRequest(card.id, sum, name);
  };

  if (!cart || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text variant="error">Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <RestaurentInfoCard restaurent={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }, index) => {
              return (
                <List.Item key={index} title={`${item} - ${price / 100}`} />
              );
            })}
          </List.Section>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
        <NameInput
          label="Enter Name same on card"
          value={name}
          onChangeText={(t) => setName(t)}
        />
        <Spacer position="bottom" size="large">
          {name.length > 0 && (
            <CreditCardInput name={name} onSuccess={setCard} />
          )}
        </Spacer>

        <PayButton icon="cash" mode="contained" onPress={onPay}>
          Pay Now
        </PayButton>
        <Spacer position="top" size="medium">
          <ClearButton icon="cart-off" mode="contained" onPress={clearCart}>
            Clear Cart
          </ClearButton>
        </Spacer>
        <Spacer position="bottom" size="medium" />
      </ScrollView>
    </SafeArea>
  );
};
