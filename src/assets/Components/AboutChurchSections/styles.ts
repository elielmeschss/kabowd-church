import styled from "styled-components";
import { SubTitle } from "../../../Pages/Home/styles";
const textContainer = `
margin-left: 14rem;
margin-right: 17.1875rem;
`;

export const SectionContainer = styled.div`
  margin-top: 7.625rem;
  display: flex;
  align-items: center;
  align-content: center;
&:nth-child(n+2){
  margin-top: 0;
}
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;
export const SubTitleAbout = styled(SubTitle)`
  ${textContainer};
`;
export const ImageContainer = styled.div`
  flex: 1;
  width: 50%;
  text-align: right;
`;
export const AboutText = styled.div`
  flex: 1;
  width: 50%;
  text-align: left;
`;
export const Title = styled.p`
  ${textContainer}

  font-size: 42px;
  font-weight: bold;
`;
export const BodyText = styled.p`
  ${textContainer}

  width: 27.8rem;
  font-size: 14px;
  font-weight: light;
  letter-spacing: 0.84px;
  color: ${(props) =>
    props.theme["gray-100"]};
  &::after {
    content: "";
    display: block;
    width: 11.0625rem;
    margin-top: 45px;
    border: 2px solid
      ${(props) =>
    props.theme[
    "yellow-600"
    ]};
    opacity: 1;
  }
`;
export const GroupImages = styled.img`
  height: 36.25rem;
  width: 100%;
  max-width: 100vw;
  object-fit: cover;
  background-image: transparent;
  opacity: 1;
`;
