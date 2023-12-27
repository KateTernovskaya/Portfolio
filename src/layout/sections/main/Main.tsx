import React from 'react';
import PhotoImg from "../../../assets/images/photo.png"
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {Container} from "../../../components/wrapper/Container";
import {Button} from "../../../components/Button";
import {S} from './Main_Styles'

export const Main: React.FC = () => {
    return (
        <S.Main id={'about'}>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} gap={'40px'}
                             wrap={'wrap-reverse'}>
                    <S.Text>
                        <S.MainTitle>Frontend Developer</S.MainTitle>
                        <S.Name>Hello, my name is Ekaterina&nbsp;Ternovskaya</S.Name>
                        <S.About>I am engaged in Frontend development.
                            My journey into IT began with a thirst to learn how the web works. Since then, I have come a
                            long way in studying various technologies.
                            I try to create web applications that are not only functional, but also user-friendly for
                            each user.
                            I will be glad to contribute to your project and create interfaces that will inspire and
                            surprise users.</S.About>
                        <FlexWrapper gap={'20px'} wrap={'wrap'}>
                            <Button>LinkedIn</Button>
                            <Button as={'a'} target={'_blank'}
                                    href={'https://github.com/KateTernovskaya'}> GitHub
                            </Button>
                        </FlexWrapper>
                    </S.Text>
                    <S.Photo src={PhotoImg}/>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};