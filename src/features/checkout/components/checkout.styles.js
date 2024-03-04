import styled from "styled-components/native";
import { Avatar, Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
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
