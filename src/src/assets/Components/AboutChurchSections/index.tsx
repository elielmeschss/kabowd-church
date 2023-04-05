import { SubTitle } from "../../../Pages/Home/styles"
import { AboutText, BodyText, GroupImages, SectionContainer, Title } from "./styles"

interface IAboutSection{
  title: string,
  body: string,
  image: string
}

export function AboutChurchSections({title, body, image}: IAboutSection){
  return(
      <SectionContainer>
        <AboutText className="aboutText">
          <SubTitle>GRUPO</SubTitle>
          <Title>{title}</Title>
          <BodyText>
            {body}
          </BodyText>
        </AboutText>
        <div>
          <GroupImages className="imagesAboutGroups" src={image} alt="" />
        </div>
      </SectionContainer>
  )
}