import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {Project} from "./project/Project";
import ProjImg1 from '../../../assets/images/project1.jpg'
import ProjImg2 from '../../../assets/images/project2.jpg'
import ProjImg3 from '../../../assets/images/project3.jpg'
import ProjImg4 from '../../../assets/images/project4.jpg'
import {Container} from "../../../components/wrapper/Container";
import {S} from './Projects_Styles'

const projectData = [
    {
        title: 'Portfolio',
        src: ProjImg4,
        text: 'The LoftHouse residential complex is a business class project.',
        hrefBtn: 'https://kateternovskaya.github.io/Portfolio/',
        hrefIcon: 'https://github.com/KateTernovskaya/Portfolio',
    },
    {
        title: 'Loft House',
        src: ProjImg1,
        text: 'The LoftHouse residential complex is a business class project.',
        hrefBtn: 'https://kateternovskaya.github.io/LoftHouse/',
        hrefIcon: 'https://github.com/KateTernovskaya/LoftHouse',
    },
    {
        title: 'Product & Dot',
        src: ProjImg2,
        text: 'Implementation of a cart page for an online store.',
        hrefBtn: 'https://kateternovskaya.github.io/product-and-dot/',
        hrefIcon: 'https://github.com/KateTernovskaya/product-and-dot',
    },
    {
        title: 'Creative Art',
        src: ProjImg3,
        text: 'Website for creating and publishing NFT works',
        hrefBtn: 'https://kateternovskaya.github.io/LoftHouse/',
        hrefIcon: 'https://github.com/KateTernovskaya/LoftHouse',
    },

]

export const Projects: React.FC = () => {
    return (
        <S.Projects id={'projects'}>
            <Container>
                <SectionTitle>My Projects</SectionTitle>
                <FlexWrapper direction={'column'} justify={'center'} gap={'30px'}>
                    {projectData.map((project, index) => {
                        return <Project title={project.title} key={index}
                                        src={project.src} text={project.text}
                                        hrefBtn={project.hrefBtn} hrefIcon={project.hrefIcon}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};