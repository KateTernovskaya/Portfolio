import styled from "styled-components";

type LinkPropsType = {
    href: string
}
export const Link = styled.a<LinkPropsType>`
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:visited {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    text-decoration: none
  }
`