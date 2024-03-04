import styled from "styled-components/native";
import {
  ActivityIndicator,
  Avatar,
  Button,
  TextInput,
} from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { MD2Colors } from "react-native-paper";

export const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const PaymentProcessing = styled(ActivityIndicator).attrs({
  size: 128,
  color: MD2Colors.blue20,
  animating: true,
})`
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 999;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.bg || props.theme.colors.brand.primary};
`;

export const NameInput = styled(TextInput)`
  margin: ${(props) => props.theme.space[3]};
`;

export const PayButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
  textColor: "white",
})`
  width: 80%;
  align-self: center;
  padding: ${(props) => props.theme.space[1]};
`;

export const ClearButton = styled(Button).attrs({
  buttonColor: colors.ui.error,
  textColor: "white",
})`
  width: 80%;
  align-self: center;
  padding: ${(props) => props.theme.space[1]};
`;
