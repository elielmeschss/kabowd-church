import { AboutText, BodyText, GroupImages, ImageContainer, SectionContainer, SubTitleAbout, Title } from "./styles"

interface IAboutSection{
  title: string,
  body: string,
  image: string
}

export function AboutChurchSections({title, body, image}: IAboutSection){
  return(
      <SectionContainer>
        <AboutText className="aboutText">
          <SubTitleAbout>GRUPO</SubTitleAbout>
          <Title>{title}</Title>
          <BodyText>
            {body}
          </BodyText>
        </AboutText>
        <ImageContainer>
          <GroupImages className="imagesAboutGroups" src={image} alt="" />
        </ImageContainer>
      </SectionContainer>
  )
}