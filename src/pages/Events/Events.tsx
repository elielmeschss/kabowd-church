import React from "react";
import { Container, Row } from 'react-bootstrap'
import CardEvent from "../../components/cardsRender/CardEvents";

import eventsLink from "./mock";


import styles from './events.module.scss'
import ScrollTo from "../../components/ScrollTo/ScrollTo";
import { AllWindows } from "../../components/resizing/WindowResize";

export default function Events() {

  return (
    <AllWindows>
      <section>
        <header className={styles.eventsHeaderSection}>
          <div className={styles.contentHeaderTxt}>
            <span className={styles.contentSpanTxt}>Kabowd</span>
            <h1 className={styles.contentTitleHeader}>Eventos</h1>
          </div>
        </header>

        <Container>
          <Row>
            <div className={styles.mainCardsEvents}>
              <CardEvent
                title="Escola de Ester"
                text="A escola de ester veio com a inteção de moldar o carater da mulher, renovando, exortando, trazendo luz, para quebrar cadeias e grilhões, para libertar."
                img={eventsLink.ester}
                day="07"
                month="AGO"
                active={false}
                messageAlert="Inscrições Encerradas"
              />

              <CardEvent
                title="Escola de Sacerdotes"
                text="A escola tem a intenção de restaurar o caráter do sacerdóte, ensinando seu papel, restaurando a intimidade com Deus, e trilhando os passo de um Homem temente a Deus."
                img={eventsLink.sacerdotes}
                day="08"
                month="AGO"
                active={false}
                messageAlert="Inscrições Encerradas"
              />

              <CardEvent
                title="Retiro de Jovens"
                text=""
                img={eventsLink.retiro}
                day="00"
                month="---"
                active={false}
                messageAlert="Em Breve"
              />

              <CardEvent
                title="Praise Conference"
                text=""
                img="https://placehold.co/600x400/EEE/31343C"
                day="00"
                month="---"
                active={false}
                messageAlert="Em Breve"
              />
            </div>
          </Row>
        </Container>

        <ScrollTo />
      </section>
    </AllWindows>
  )
}
