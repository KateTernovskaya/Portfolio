import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/wrapper/Container";
import {S} from './Contacts_Styles'

const socialItemData = [
    {
        iconId: 'telegram',
        viewBox: '-3 -4 30 30',
    },
    {
        iconId: 'linkedin',
        viewBox: '-5 -3 30 30',
    },
    {
        iconId: 'github',
        viewBox: '-3 -3 30 30',
    },
    {
        iconId: 'mail',
        viewBox: '-3 -4 30 30',
    },
]

export const Contacts: React.FC = () => {
    return (
        <S.Contacts id={'contacts'}>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <S.StyledForm>
                    <S.FieldBlock>
                        <span>Name</span>
                        <S.Field/>
                    </S.FieldBlock>
                    <S.FieldBlock>
                        <span>Email</span>
                        <S.Field/>
                    </S.FieldBlock>
                    <S.FieldBlock>
                        <span>Message</span>
                        <S.Field as={'textarea'}/>
                    </S.FieldBlock>
                    <Button accent type={"submit"}> Send </Button>
                </S.StyledForm>
                <S.Social>
                    {socialItemData.map((socialItem, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <a href="#">
                                    <Icon iconId={socialItem.iconId} width={'40px'} height={'40px'}
                                          viewBox={socialItem.viewBox}
                                    />
                                </a>
                            </S.SocialItem>
                        )
                    })}
                </S.Social>
            </Container>
        </S.Contacts>
    );
};