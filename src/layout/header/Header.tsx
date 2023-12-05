import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

export const itemsMenu = ["About", "Skills", "Projects", "Contacts",]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo fill={"rgba(6,49,131,0.5)"}/>
            <Menu menuItems={itemsMenu}/>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
 display: flex;
  align-items: center;
  justify-content: space-between;
background-color: cadetblue;
`