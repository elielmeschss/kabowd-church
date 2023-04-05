import { Container } from "react-bootstrap";
import bannerCultoFamilia from "../../assets/images/banner/banner-familia-culto.png";
import {
  HeadTitle,
  HeadingTitles,
  SubTitle,
  VerseSection,
  WarningSection,
} from "./styles";
import { AboutChurchSections } from "../../assets/Components/AboutChurchSections";
import lion from "../../assets/images/kabowd-teen-desktop.png";

const mockCard = [
  {
    id: Math.random().toString(),
    image: lion,
    title: "MOVING KINGDOM",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
];

export function Home() {
  return (
    <>
      <WarningSection>
        <img
          className="w-100"
          src={
            bannerCultoFamilia
          }
          alt=""
        />
      </WarningSection>

      <section className="py-4">
        <HeadingTitles>
          <SubTitle>
            A IGREJA
          </SubTitle>
          <HeadTitle>
            Somos uma igreja
            que acredita em
            Jesus e ama a Deus
            acima de tudo
          </HeadTitle>
        </HeadingTitles>
        <VerseSection>
          <p className="text-secondary">
            13. E aconteceu
            que, quando eles
            uniformemente
            tocavam as
            trombetas, e
            cantavam, para
            fazerem ouvir uma
            só voz, bendizendo
            e louvando ao
            Senhor; e
            levantando eles a
            voz com trombetas,
            címbalos, e outros
            instrumentos
            musicais, e
            louvando ao
            Senhor, dizendo:
            Porque ele é bom,
            porque a sua
            benignidade dura
            para sempre, então
            a casa se encheu
            de uma nuvem, a
            saber, a casa do
            Senhor; 14. E os
            sacerdotes não
            podiam permanecer
            em pé, para
            ministrar, por
            causa da nuvem;
            porque a glória do
            Senhor encheu a
            casa de Deus.
          </p>
          <p className="verseChapter">
            <strong>
              2 Crônicas
              5:13,14
            </strong>
          </p>
        </VerseSection>
      </section>
      <main>
        {mockCard.map(item =>  (
          <AboutChurchSections
            key={item.id}
            image={item.image}
            title={item.title}
            body={item.body}
          />
        )) }

      </main>
    </>
  );
}
