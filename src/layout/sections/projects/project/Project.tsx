import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type ProjectPropsType = {
    title: string
    text: string
    src: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <FlexWrapper>
                <Image src={props.src} alt=""/>
                <FlexWrapper direction={'column'}>
                    <Title>{props.title}</Title>
                    <Text>{props.text}</Text>
                    <button>View Project</button>
                </FlexWrapper>
            </FlexWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
background-color: white;
  max-width: 70%;
`

const Image = styled.img`
  width: 50%;
  height: 250px;
  object-fit: cover;
`
const Title = styled.h3`

`
const Text = styled.p`

`



