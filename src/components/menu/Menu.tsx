import React from 'react';
import styled from "styled-components";


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item,index) => {
                    return  <li key={index}>
                                <a href="">{item}</a>
                            </li>
                })}
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

