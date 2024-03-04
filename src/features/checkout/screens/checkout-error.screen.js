import React from "react";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../typography/text.component";
import { colors } from "../../../infrastructure/theme/colors";
import { CartIconContainer, CartIcon } from "../components/checkout.styles";
import { SafeArea } from "../../restaurents/components/restaurant-list.styles";

export const CheckoutErrorScreen = ({ route }) => {
  const { error = " " } = route.params;
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Spacer position="top" size="large">
          <Text variant="error">{error}</Text>
        </Spacer>
      </CartIconContainer>
    </SafeArea>
  );
};
