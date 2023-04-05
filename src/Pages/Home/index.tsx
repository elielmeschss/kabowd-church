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
import womanPraying from "../../assets/images/Mulheres-Valor-desktop.png";
import honorableMan from "../../assets/images/Homens-honra-desktop.png";
import happyKids from "../../assets/images/Kabowd-Kids-desktop.png";

const mockCard = [
  {
    id: Math.random().toString(),
    image: lion,
    title: "MOVING KINGDOM",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    id: Math.random().toString(),
    image: womanPraying,
    title: "MULHERES DE VALOR",
    body: "O nome surgiu em uma resposta de Deus a um pedido de um nome da Pastora Presidente para reunir as mulheres da Comunidade Kabowd. Perguntei ao Senhor porque Mulheres de Valor e sua resposta foi: Porque este grupo ajudará outras mulheres, mulheres desesperadas, mulheres depressivas, mulheres desvalorizadas, mulheres rejeitas, mulheres que não mais acreditam no seu potencial. Também irá ensinar mulheres a resgatar os valores perdidos dentro de casa, honra, respeito, gratidão, paternidade, maternidade e filiação.",
  },
  {
    id: Math.random().toString(),
    image: honorableMan,
    title: "HOMENS DE HONRA",
    body: "Um grupo firmado na palavra, compromissado com a verdade estabelecendo os propósitos de Deus para a vida do homem com intuito de arregimentar homens de honra, com princípios de Deus para o avanço do Reino. Procuramos aqui resgatar a dignidade do homem que foi perdida através dos anos juntos a sua paternidade colocando de volta ao encontro do pai. aquele que dá intimidade, provisão e destino.",
  },
  {
    id: Math.random().toString(),
    image: happyKids,
    title: "KABOWD KIDS",
    body: "Acreditamos que antes mesmo de vir ao mundo a criança nasceu no coração de Deus. E o propósito do Ministério kabowd Klds é direciona-las ao único caminho mostrando que elas fazem parte do Reino tanto quanto um adulto. Não há idade para começar aquilo que desde o princípio já foi determinado do coração de uma criança é extraída a verdadeira adoração. Toda contrução é necessário um fundamento sólido bem alicerçado, nossas crianças aprendem a construir sua vida no alicerse inabalável.",
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
