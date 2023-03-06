import React, { PropsWithChildren } from "react";
import { StyledButton } from "./styles";
import { THEME, Theme } from "../../constants";

export type ButtonProps = {
  theme: Theme;
};

const Button = ({
  theme = THEME,
  children,
}: PropsWithChildren<ButtonProps>) => (
  <StyledButton theme={theme}>{children}</StyledButton>
);

export default Button;
