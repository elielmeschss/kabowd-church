import React from "react";
import { Container, Row } from 'react-bootstrap'
import styles from './about.module.scss'
import CardsTip from "../../components/cardsRender/CardTip";
import ScrollTo from "../../components/ScrollTo/ScrollTo";
import { AllWindows, DeskSize, MobileSize, TabletSize } from "../../components/resizing/WindowResize";

const boutImg = require('../../assets/images/about/quem-somos-desktop.png')
const pastorsAbout = require('../../assets/images/about/pastores-about-desktop.png')
const missionAbout = require('../../assets/images/about/nossa-missao-desktop.png')
const missionAboutMobi = require('../../assets/images/about/nossa-missao-mobile.png')


export default function About() {
  return (
    <AllWindows>
      <section className={styles.mainAbout}>
        <div className={styles.AboutContentMain}>
          <Container>
            <Row>
              <div className={styles.aboutBoxText}>
                <CardsTip
                  minimal="A igreja"
                  title="Quem Somos"
                  texta={`A Comunidade Kabowd nasceu no dia 28 de Março de 2017. A Palavra Kabowd, traduzida do hebraico significa - "Peso da Glória de Deus" em referência a`}
                  textb={`2 Crônicas 5:14, nascendo assim a Comunidade Evangelística Kabowd - Ministério Peso da Glória de Deus.`}
                  textc={`"Os sacerdotes não podiam entrar no templo, porquanto a Glória de senhor havia enchido e templo.” 2 Crônicas 5:14.`}
                  textd={`Cremos que a manifestação da glória de Deus é tão palpável quanto possamos imaginar, a medida que nos damos a cristo e ao "eis-me aqui”, no momento em que sentimos o véu se rasgar sobre nossas vidas. Em meio a tantas dificuldades, crises, obstáculos e dúvidas devemos lembrar que Deus tem enchido o seu templo com sua glória. Precisamos nos reabastecer das boas novas do senhor pois "É chegado o Reino dos Céus”. Precisamos resgatar os perdidos e implantar o Reino de Deus visível e palpável em nossas almas para que possamos ser cheios da graça, do espírito e da glória de Deus. Trabalhando em Comunhão, Restauração e Adoração.`}
                  ass=""
                  url={boutImg}
                />
              </div>
            </Row>
          </Container>
        </div>

        <div className={styles.churchContentMain}>
          <Container>
            <Row>
              <div className={styles.churchBoxText}>
                <CardsTip
                  minimal="A igreja"
                  title="Quem Somos"
                  texta={`Sergio Roni Dias Barros é casado com Leila Andréia Mesch Ferreira Barros compondo uma família Sacerdotal com 2 filhos e 1 neta. Natural de Santa Maria - RS, vive hoje em Gaspar - SC aonde Fundou a Comunidade Kabowd. Nascido em berço cristão recebeu seu chamado ministerial aos 14 anos, porém vendo a sobrecarga do ministério, as dificuldades e provações de amigos que exerciam o pastoreio acabou rejeitando seu chamado.`}
                  textb={`Aos 48 anos se tornou pastor de uma congreção na Cidade de Gaspar e por durante 3 anos estava sendo gerado novamente o anceio de seu chamado recebendo então de muitas orações a chamada do Senhor.`}
                  textc={`Aos 50 anos deu inicio e fundação ao Ministério Peso da Glória de Deus. Tendo como Alvo alcançar vidas, devolver a paternidade de Deus á uma geração marcada como orfãos de Pai, restaurar a comunhão e a adoração ensinando a palavra de Deus.`}
                  textd={`"Nossa Guerra é Contra a apostasia e o esfriamento espiritual e as coisas comuns que tem se tornado normais. Precisamos Gerar Filhos com discernimento que irá preparar a próxima geração para encontrar com o seu Senhor."`}
                  ass="Pr. Sergio R.D Barros"
                  url={pastorsAbout}
                />
              </div>
            </Row>
          </Container>
        </div>

        <div className={styles.aboutMission}>
          <div className={styles.bannerMission}>
            <DeskSize>
              <img src={missionAbout} alt="Nossa Missão" />
            </DeskSize>

            <TabletSize>
              <img src={missionAboutMobi} alt="Nossa Missão" />
            </TabletSize>

            <MobileSize>
              <img src={missionAboutMobi} alt="Nossa Missão" />
            </MobileSize>

          </div>
          <div className={styles.aboutMissionContent}>
            <h1 className={styles.titleMissionContent}>Nossa Missão</h1>
            <p className={styles.descriptionMissionContent}>
              Nossa Missão é propagar o Reino de Deus e seu evangelho a todos os cantos, homens, mulheres, jovens, crianças, adolescentes e idosos.
              Somos um lugar para todos, aonde o foco é louvar e adorar aquele que vive e reina.
              <span>
                <br />
                <br />
              </span>
              Como igreja nosso dever é desenvolver e restituir a paternidade de Deus, o contato com o criador, somos uma comunidade sem fronteiras que busca reconectaras pessoas ao pai, crendo de que o Reino de Deus se movimenta para todos os lados, em qualquer cidades, estados, povos, línguas e nações.
              Não há barreira nem empecilho para pregar o evangelho.
            </p>
          </div>
        </div>

        <ScrollTo />
      </section>
    </AllWindows>
  )
}
