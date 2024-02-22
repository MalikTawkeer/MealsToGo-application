import styled from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};
const positionVariant = {
  top: "marginTop",
  bottom: "marginBottom",
  left: "marginLeft",
  right: "marginRight",
};

const getVarient = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  return `${property}:${theme.space[sizeIndex]}`;
};

export const Spacer = styled.View`
  ${({ position, size, theme }) => getVarient(position, size, theme)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
