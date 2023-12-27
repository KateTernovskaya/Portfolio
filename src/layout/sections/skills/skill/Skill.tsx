import React from 'react';
import {FlexWrapper} from "../../../../components/wrapper/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import {S} from '../Skills_Styles'

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper align={'center'} gap={'20px'}>
                <Icon iconId={props.iconId}/>
                <S.SkillTitle>{props.title}</S.SkillTitle>
            </FlexWrapper>
            <S.SkillText>{props.description}</S.SkillText>
        </S.Skill>
    );
};