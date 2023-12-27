import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Skills = styled.section`
  position: relative;
  padding-bottom: 30px;
`

const Skill = styled.div`
  position: relative;
  background: ${theme.colors.linear};
  width: 30%;
  padding: 15px;
  justify-content: space-between;
  flex-grow: 1;
  border-radius: 10px;

  @media ${theme.media.tablet} {
    width: 40%;
  }

  @media ${theme.media.mobile} {
    width: 100%;
  }
`

const SkillTitle = styled.h4`
  text-transform: uppercase;
  letter-spacing: 1px;
`

const SkillText = styled.p`
  font-weight: 200;
  text-align: justify;
`

export const S = {
    Skills,
    Skill,
    SkillTitle,
    SkillText,
}