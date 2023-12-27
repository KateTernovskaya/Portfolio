import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../../components/wrapper/FlexWrapper";
import {font} from "../../styles/FontMixin";

const Footer = styled.footer`
  position: relative;
  background: ${theme.colors.linear};

  padding: 10px;
  }

  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      flex-direction: column;
      gap: 20px;
    }
  }

  @media ${theme.media.mobile} {
    ${FlexWrapper} nav ul {
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 15px;
    }
  }
`

const Copyright = styled.p`
  ${font({weight: 200, Fmax: 15, Fmin: 12})}
  text-align: center;
  margin-top: 10px;
`

export const S = {
    Footer,
    Copyright,
}