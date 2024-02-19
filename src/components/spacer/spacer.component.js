import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const TopSmall = styled.View`
  margin-top: ${(props) => props.theme.space[1]};
`;
const TopMedium = styled.View`
  margin-top: ${(props) => props.theme.space[2]};
`;
const TopLarge = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
`;
const LeftSmall = styled.View`
  margin-left: ${(props) => props.theme.space[1]};
`;
const LeftMedium = styled.View`
  margin-left: ${(props) => props.theme.space[2]};
`;
const LeftLarge = styled.View`
  margin-left: ${(props) => props.theme.space[3]};
`;

export const Spacer = ({ varient }) => {
  if (varient === "top.medium") {
    return <TopMedium />;
  }
  if (varient === "top.large") {
    return <TopLarge />;
  }
  if (varient === "left.small") {
    return <LeftSmall />;
  }
  if (varient === "left.medium") {
    return <LeftMedium />;
  }
  if (varient === "left.large") {
    return <LeftLarge />;
  }
  return <TopSmall />;
};
