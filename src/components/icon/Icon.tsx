import React from 'react';
import IconSvg from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string;
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${IconSvg}#${props.iconId}` } />
        </svg>
    );
};

