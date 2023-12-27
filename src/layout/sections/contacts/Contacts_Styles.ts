import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Contacts = styled.section``

const StyledForm = styled.form`
  position: relative;
  background-color: white;
  border: 10px solid;
  border-image: linear-gradient(45deg, rgba(6, 49, 131, 0.1), rgba(6, 49, 131, 0.4)) 1;
  padding: 50px 30px 30px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 0 auto;

  textarea {
    resize: none;
  }
`

const FieldBlock = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Field = styled.input`
  max-width: 100%;
  border: none;
  border-bottom: 1px solid ${theme.colors.secondaryBg};
  padding: 10px;
  font-size: 1.6rem;
  background-color: rgba(6, 49, 131, 0);
  outline: none;

  &:focus-visible, &:focus {
    border-bottom: 2px solid ${theme.colors.accent};
  }
`

const Social = styled.ul`
  position: relative;
  margin: 50px;
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;

  svg {
    background-color: ${theme.colors.accent};
    border-radius: 50%;

    &:hover {
      transition: all 0.3s;
      opacity: 0.8;
      fill: white;
      transform: translateY(-5px);
    }
  }
`

const SocialItem = styled.li``

export const S = {
    Contacts,
    StyledForm,
    FieldBlock,
    Field,
    Social,
    SocialItem,
}