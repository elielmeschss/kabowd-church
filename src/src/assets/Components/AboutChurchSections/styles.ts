import styled from "styled-components";

export const AboutText = styled.div`
  text-align: left;
  margin-left: 14rem;
  margin-right: 17.1875rem;
`
export const Title = styled.p`
  font-size: 42px;
  font-weight: bold;
`
export const BodyText = styled.p`
  width: 444px;
  font-size: 14px;
  font-weight: light;
  letter-spacing: 0.84px;
  color: ${props => props.theme["gray-100"]};
  &::after{
    content: "";
    display: block;
    width: 11.0625rem;
    border: 2px solid ${props => props.theme["yellow-600"]};
    opacity: 1;
    margin-top: 15px;
}
`
export const GroupImages = styled.img`
  height: 36.25rem;
  width: 60rem;
  opacity: 1;
  background-size: object-fit;
`


export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3.125rem;
  align-items: center;

`