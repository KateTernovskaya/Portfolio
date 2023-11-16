import React from 'react';
import PhotoImg from "../../../assets/images/photo.webp"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-between'}>
                <Text>
                    <MainTitle>Frontend Developer</MainTitle>
                    <Name>Hello, my name is Ekaterina Ternovskaya</Name>
                    <About>I am engaged in Frontend development.
                        My journey into IT began with a thirst to learn how the web works. Since then, I have come a
                        long way in studying various technologies.
                        I try to create web applications that are not only functional, but also user-friendly for
                        each user.
                        I will be glad to contribute to your project and create interfaces that will inspire and
                        surprise users.</About>
                    <div>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </Text>


                <Photo src={PhotoImg} />
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  background-color: rgba(6, 49, 131, 0.6);
`
const Text = styled.div`
  width: 50%;
`

const MainTitle = styled.h1`
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 600;
  color: rgba(6,49,131,0.5);
`

const Name = styled.h3`
  margin: 10px 0;
  font-size: 5rem;
  font-weight: 700;
  line-height: 6rem;
`
const About = styled.p`
  margin: 20px 0;
  font-weight: 200;
`


const Photo = styled.img`
object-fit: cover;
  max-width: 350px;
  border-radius: 8px;
  box-shadow: -50px 50px 50px 20px rgba(6,49,131,0.5);
`
