import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper align={'center'}>
                <Icon iconId={props.iconId}/>
                <SkillTitle>{props.title}</SkillTitle>
            </FlexWrapper>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
width: 30%;
  margin: 10px;

`
const SkillTitle = styled.h4`

`

const SkillText = styled.p`

`

