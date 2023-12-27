import React from 'react';
import {DesktopMenu} from "../header/headerMenu/desktopMenu/DesktopMenu";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/wrapper/FlexWrapper";
import {Container} from "../../components/wrapper/Container";
import {S} from './Footer_Styles';

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper align={'center'} justify={"space-between"}>
                    <DesktopMenu />
                    <Logo fill={"white"} />
                </FlexWrapper>
                <S.Copyright>© 2023 Ekaterina Ternovskaya, All Rights Reserved.</S.Copyright>
            </Container>
        </S.Footer>
    );
};