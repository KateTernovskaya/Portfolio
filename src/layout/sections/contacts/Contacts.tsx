import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icon";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <StyledForm>
                <FieldBlock>
                    <FieldName>Name</FieldName>
                    <Field/>
                </FieldBlock>
                <FieldBlock>
                    <FieldName>Email</FieldName>
                    <Field/>
                </FieldBlock>
                <FieldBlock>
                    <FieldName>Message</FieldName>
                    <Field as={'textarea'}/>
                </FieldBlock>
                <Button type={"submit"}> Send </Button>
            </StyledForm>
            <Social>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={'telegram'}
                              width={'35px'}
                              height={'35px'}
                              viewBox={'0 0 35 35'}
                        />
                    </SocialLink>
                </SocialItem>

                <SocialItem>
                    <SocialLink>
                        <Icon iconId={'linkedin'}
                              width={'35px'}
                              height={'35px'}
                              viewBox={'0 0 35 35'}/>
                    </SocialLink>
                </SocialItem>

                <SocialItem>
                    <SocialLink>
                        <Icon iconId={'github'}
                              width={'35px'}
                              height={'35px'}
                              viewBox={'0 0 35 35'}/>
                    </SocialLink>
                </SocialItem>

                <SocialItem>
                    <SocialLink>
                        <Icon iconId={'mail'}
                              width={'35px'}
                              height={'35px'}
                              viewBox={'0 0 35 35'}/>
                    </SocialLink>
                </SocialItem>


            </Social>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  background-color: linen;
`

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`
const FieldBlock = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const FieldName = styled.span`

`
const Field = styled.input`

`


const Social = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;


  svg {
    background-color: fuchsia;
    border-radius: 50%;

  }
`

const SocialItem = styled.li`

`
const SocialLink = styled.a`

`



