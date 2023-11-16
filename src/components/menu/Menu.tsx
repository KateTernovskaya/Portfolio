import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 50px;
  }

  li {
    padding: 5px;
  }

  //& li:hover {
  //  transition: all .5s ease;
  //  border-bottom: 1px solid rgba(6,49,131,0.5);
  //  color: rgba(6,49,131,0.5);
  //}
`

