import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Header = styled.header`
  position: relative;
  
  background: ${theme.colors.linear};
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media ${theme.media.mobile} {
    svg {
      width: 120px;
      height: 100px;
    }
  }
`

export const S = {
    Header,
}