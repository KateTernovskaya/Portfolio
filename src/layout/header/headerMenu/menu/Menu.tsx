import React from 'react';
import {S} from '../HeaderMenu_Styles'

const itemsMenu = [
    {
        title: "About",
        href: 'about',
    },
        {
        title: "Projects",
        href: 'projects',
    },
    {
        title: "Skills",
        href: 'skills',
    },
    {
        title: "Contacts",
        href: 'contacts',
    },
]

export const Menu: React.FC<{ onClick?: () => void }> = ({onClick}) => {
    return (
        <ul>
            {itemsMenu.map((item, index) => {
                return <li key={index}>
                    <S.NavLink
                        onClick={onClick}
                        to={item.href}
                        smooth={true}
                    >
                        {item.title}
                    </S.NavLink>
                </li>
            })}
        </ul>
    );
};



