import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";
import {font} from "./FontMixin";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    ${font({Fmax: 18, Fmin: 14})}
    font-family: 'Ysabeau', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.colors.primaryBg};
  }

  a, a:visited, a:hover {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
  }

  section {
    padding-top: 70px;

    @media ${theme.media.tablet} {
      padding-top: 40px;
    }
  }

  @media ${theme.media.tablet} {
    padding-top: 40px;
  }
`