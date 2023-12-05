import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {itemsMenu} from "../header/Header";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper>
                <Menu menuItems={itemsMenu}/>
                <Logo fill={'white'} />
            </FlexWrapper>
            <Copyright>© 2023 Ekaterina Ternovskaya, All Rights Reserved.</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: rgba(121, 26, 121, 0.6);
`

const Copyright = styled.small`
  
`

