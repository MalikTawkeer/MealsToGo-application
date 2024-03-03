import { StatusBar, FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Button, MD2Colors } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  padding-top: 10px;
`;

export const RestaurentList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const LoadingContainer = styled.View`
  position: absolute;
  left: 50%;
  top: 50%;
`;
export const Loading = styled(ActivityIndicator)`
  margin-left: -25%;
`;

export const OrderButton = styled(Button).attrs({
  textColor: colors.text.inverse,
})`
  padding: ${(props) => props.theme.space[1]};
  width: 65%;
  align-self: center;
`;
