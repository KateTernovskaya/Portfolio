import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/FontMixin";

const Main = styled.div`
  margin: 50px 0;
  min-height: 80vh;
  display: flex;
  align-items: center;


  @media ${theme.media.smallDesc} {
    .main-block {
      justify-content: center;
    }
  }

  @media ${theme.media.tablet} {
    margin: 30px 0;
  }
`

const MainTitle = styled.h1`
  ${font({color: theme.colors.accent, weight: 600, Fmax: 25, Fmin: 20})}
  text-transform: uppercase;
  letter-spacing: 2px;
`

const Text = styled.div`
  position: relative;

  max-width: 55%;

  @media ${theme.media.smallDesc} {
    max-width: 100%;
    text-align: center;

    div {
      justify-content: space-around;
    }
  }

`

const Name = styled.h2`
  ${font({weight: 800, Fmax: 55, Fmin: 30})}
  margin: 15px 0;
`

const About = styled.p`
  margin: 30px 0 40px 0;
  letter-spacing: 1px;
  text-align: justify;

  @media ${theme.media.mobile} {
    margin: 15px 0 20px 0;
  }
`

const Photo = styled.img`
  position: relative;
  object-fit: cover;
  max-width: 350px;
  width: 100%;
  border-radius: 8px;
  background-color: transparent;
  margin: 0 auto;

  @media ${theme.media.mobile} {
    max-width: 280px;
  }
`

export const S = {
    Main,
    MainTitle,
    Text,
    Name,
    About,
    Photo,
}