import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/FontMixin";

type ButtonPropsType = {
    accent?: boolean;
}

export const Button = styled.button<ButtonPropsType>`
  ${font({color: theme.colors.accent, Fmax: 18, Fmin: 14})}

  padding: 10px 30px;
  max-width: 200px;
  background-color: transparent;
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 1px;
    width: 30px;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
  }

  &:hover {
    opacity: 0.8;
    transition: background-color 0.5s;
    background-color: ${theme.colors.accent};
    color: white;
    border-radius: 10px;
    border: none;

    &::before {
      background-color: transparent;
    }
  }

  ${props => props.accent && css<ButtonPropsType>`
    background-color: ${theme.colors.accent};
    color: white;
    border-radius: 10px;
    border: none;

    &::before {
      background-color: transparent;
    }
  `}
`