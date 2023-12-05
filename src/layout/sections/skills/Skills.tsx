import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill iconId={'html'}
                       title={'HTML5'}
                       description={'HTML5 (Hypertext Markup Language 5) is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard. It is maintained by the Web Hypertext Application Technology Working Group (WHATWG), a consortium of the major browser vendors (Apple, Google, Mozilla, and Microsoft).'}/>
                <Skill iconId={'css'}
                       title={'CSS3'}
                       description={'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. CSS is among the core languages of the open web and is standardized across Web browsers.'}/>
                <Skill iconId={'figma'}
                       title={'Figma'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur reiciendis, sequi. Esse magnam nisi omnis optio sint veniam voluptas voluptate'}/>
                <Skill iconId={'js'}
                       title={'Java Script'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur reiciendis, sequi. Esse magnam nisi omnis optio sint veniam voluptas voluptate Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur reiciendis, sequi. Esse magnam nisi omnis optio sint veniam voluptas voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur reiciendis, sequi. Esse magnam nisi omnis optio sint veniam voluptas voluptate'}/>
                <Skill iconId={'styledComp'}
                       title={'Styled Components'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur reiciendis, sequi. Esse magnam nisi omnis optio sint veniam voluptas voluptate'}/>
                <Skill iconId={'react'}
                       title={'React'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur reiciendis, sequi. Esse magnam nisi omnis optio sint veniam voluptas voluptate voluptate'}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #ffd48c;
`


