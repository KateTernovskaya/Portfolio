import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import ProjImg1 from '../../../assets/images/project1.webp'
import ProjImg2 from '../../../assets/images/project2.webp'
import ProjImg3 from '../../../assets/images/project3.webp'

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>My Projects</SectionTitle>
            <FlexWrapper direction={'column'}>
                <Project title={'Project Name'}
                         src={ProjImg1}
                         text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consequuntur, est. Aliquid dolorem ex facere?'}/>
                <Project title={'Project Name'}
                         src={ProjImg2}
                         text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consequuntur, est. Aliquid dolorem ex facere?'}/>
                <Project title={'Project Name'}
                         src={ProjImg3}
                         text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consequuntur, est. Aliquid dolorem ex facere?'}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  background-color: fuchsia;
`
