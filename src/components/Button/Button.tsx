import React, { PropsWithChildren } from "react";
import {StyledButton} from './styles'

const Button = ({ children }: PropsWithChildren) => <StyledButton>{children}</StyledButton>;

export default Button;
