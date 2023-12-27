import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/FontMixin";

export const SectionTitle = styled.h2`
  ${font({weight: 700, Fmax: 35, Fmin: 22, color: theme.colors.accent})};

  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding-bottom: 30px;
  margin-bottom: 40px;

  position: relative;

  &::before {
    content: '';
    width: 70px;
    height: 1px;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
  }

  @media ${theme.media.tablet} {
    padding-bottom: 15px;
    margin-bottom: 20px;
  }
`