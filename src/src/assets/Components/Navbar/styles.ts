import styled from "styled-components"
import { Nav, Container } from "react-bootstrap"

export const NavContainer = styled(Container)`
  top:2.75rem;
`
export const NavItems = styled.div`
margin: 0 auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
  text-align:center;
`
export const LoginArea = styled.div`
display: flex;
justify-content: center;
align-items:center;
`
export const LoginButton = styled(Nav.Item)`
display: flex;
  align-items: center;
  justify-content: center;
    background-color: ${props => props.theme["yellow-600"]};
    border-radius: 0.25rem;
    font-size: 0.875rem;
    height: 2.0625rem;
    width: 5.25rem;
    &:hover {
      transition: transform 0.2s;
      transform: scale(1.05);
      background-color: ${props => props.theme["yellow-500"]};
    }

`

export const NavBrand = styled.img`
  width: 12.375rem;
  height: 4.9375rem;
`
export const NavLinkAnchorTag = styled(Nav.Link)`
    color: ${props => props.theme.black};
    font-weight: medium;
    font-size: 1.3125rem;
    &:hover{
      transition: transform 0.2s;
      transform: scale(1.05);
      color: ${props => props.theme["yellow-600"]};
      font-weight: bold;

    }
    &::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: ${props => props.theme["yellow-600"]};
    transform: scaleX(0);
    transition: transform 0.2s ease-out;
    transform-origin: left;
    }
    &:hover::after {
    transform: scaleX(1);
  }

`