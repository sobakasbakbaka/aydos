import styled from "@emotion/styled";
import { ButtonProps } from "./Button";
// import {css} from '@emotion/css'

export const StyledButton = styled.button`
  background-color: ${(props: ButtonProps) => props.theme.colors.primary};
  color: ${(props: ButtonProps) => props.theme.colors.text};
  font-size: ${(props: ButtonProps) => props.theme.fontSizes.medium};
  font-family: ${(props: ButtonProps) => props.theme.fontFamily};
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
