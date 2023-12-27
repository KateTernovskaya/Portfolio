import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/FontMixin";

const Projects = styled.section`
  margin-top: 30px;

  & div div div:nth-child(even) {
    & div {
      display: flex;
      flex-direction: row-reverse;

      & div {
        display: flex;
        flex-direction: column;

        & div {
          flex-direction: row;
        }
      }
    }
  }
`

const Project = styled.div`
  position: relative;
  background: ${theme.colors.linear};
  width: 80%;
  border-radius: 10px;
  margin: 0 auto;

  & .project_info {
    padding: 0 30px;
    max-width: 400px;
    width: 100%;
  }

  & svg {
    background-color: ${theme.colors.accent};
    border-radius: 50%;

    &:hover {
      transition: all 0.5s;
      opacity: 0.8;
      fill: white;
      cursor: pointer;
    }
  }

  @media ${theme.media.mobile} {
    div {
      flex-wrap: wrap;
      gap: 20px;
      padding-bottom: 20px;
      align-items: center;

      img {
        width: 100%;
      }
    }
  }
`

const ImgWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  height: 250px;
`

const Image = styled.img`
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 10px;
  flex-grow: 1;
  height: 100%;
`

const Title = styled.h4`
  ${font({weight: 800, Fmax: 22, Fmin: 18})}
  letter-spacing: 2px;
  text-transform: uppercase;
`

const Text = styled.p`
  font-weight: 200;
`

export const S = {
    Projects,
    Project,
    Image,
    Title,
    Text,
    ImgWrapper,
}
