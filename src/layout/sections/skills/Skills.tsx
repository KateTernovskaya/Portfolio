import React from 'react';
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/wrapper/Container";
import {S} from './Skills_Styles'

const skillData = [
    {
        iconId: 'html',
        title: 'HTML5',
        description: 'HTML is needed to place elements on a web page: text, pictures, tables and videos. HTML builds the visual foundation of the site, indicates where elements are located.',
    },
    {
        iconId: 'css',
        title: 'CSS3',
        description: 'CSS is a language that is responsible for describing the appearance of an HTML document. If HTML structures the content on a page, then CSS allows you to format it and make it more attractive to the reader.',
    },
    {
        iconId: 'figma',
        title: 'Web Design',
        description: 'Figma is a graphic editor for collaborative design of websites, applications and other design products.',
    },
    {
        iconId: 'js',
        title: 'Java Script',
        description: 'JavaScript is a programming language that developers use to create interactive web pages. JavaScript features can improve the user experience on a website..',
    },
    {
        iconId: 'styledComp',
        title: 'Styled Components',
        description: 'Styled Components is one of the most popular CSS-in-JS solutions for React applications today. CSS-in-JS allows you to write styles directly in JS, customize them in various ways and use them as regular React components.',
    },
    {
        iconId: 'react',
        title: 'React',
        description: 'React is a JavaScript library for creating user interfaces. React performs a single task: it displays the interface component on the page, synchronizing it with application data.',
    },
]

export const Skills: React.FC = () => {
    return (
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'} gap={'20px'}>
                    {skillData.map((skill, index) => {
                        return <Skill iconId={skill.iconId} key={index}
                                      title={skill.title}
                                      description={skill.description}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};