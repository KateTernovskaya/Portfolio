import styled, {css, keyframes} from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/FontMixin";
import {Link} from "react-scroll";

//Menu
const NavLink = styled(Link)`
  color: black;
  padding: 8px;
  letter-spacing: 1px;

  &:hover {
    transition: all .5s ease;
    border-bottom: 1px solid ${theme.colors.black};
  }
`

//Desktop Menu
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 40px;
  }
`

//Mobile Menu
const MobileMenu = styled.nav``

const BurgerButton = styled.button<{ isOpen: boolean }>`
  width: 60px;
  height: 60px;
  top: 15px;
  right: 40px;

  position: relative;
  z-index: 999;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    width: 40px;
    height: 50px;
    top: 20px;
    right: 45px;
  `}
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.accent};

    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      width: 25px;
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.accent};

      position: absolute;
      transform: translateY(-10px);
      transition: transform 1s;

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
        background-color: white;
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.accent};

      position: absolute;
      transform: translateY(10px);
      transition: transform 1s;

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        background-color: white;
      `}
    }
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  background-color: rgba(38, 57, 94, 0.6);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: .8s ease-in-out;
  
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
    
  ul {
    padding: 20px;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & li a {
      ${font({color: 'white', Fmax: 30, Fmin: 14, weight: 600})};

      &:hover {
        color: white;
        border-bottom: 1px solid white;
      }
    }
  }
  
  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);
  `}
`

export const S = {
    NavLink,
    DesktopMenu,
    MobileMenu,
    BurgerButton,
    MobileMenuPopup,
}