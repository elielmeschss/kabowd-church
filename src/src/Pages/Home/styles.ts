import styled from "styled-components"
const headingCommon = `
text-align: center;
display: flex;
flex-direction: column;
margin: 0 auto;
`
export const WarningSection = styled.section`
&.img{
  width: 100%;
  height: 580vh;
  max-width: 100vw;
  object-fit: cover;
  background-image: transparent;
  opacity: 1;
}
` 
export const HeadingTitles = styled.section`
  ${headingCommon}
  width: 35.75rem;
`;
export const VerseSection = styled.section`
  ${headingCommon}
  width: 57.875rem;
`;

export const SubTitle = styled.p`
font-weight: 600;
  color: ${props => props.theme["yellow-600"]};
` 
export const HeadTitle = styled.p`
  font-weight: bold;
  font-size: 1.625rem;
  opacity: 1;
&::after{
    content: "";
    display: block;
    width: 6rem;
    border: 2px solid ${props => props.theme["yellow-600"]};
    opacity: 1;
    margin: 0 auto;
    margin-top: 15px;
}
` 