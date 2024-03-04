import React from "react";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../typography/text.component";
import { SafeArea } from "../../restaurents/components/restaurant-list.styles";
import { CartIconContainer, CartIcon } from "../components/checkout.styles";

export const CheckoutSuccessScreen = () => (
  <SafeArea>
    <CartIconContainer>
      <CartIcon icon="check" />
      <Spacer position="top" size="large">
        <Text variant="label">Success!</Text>
      </Spacer>
    </CartIconContainer>
  </SafeArea>
);
