import React from "react";
import { Container, Row } from 'react-bootstrap'
import CardEvent from "../../components/cardsRender/CardEvents";

import eventsLink from "./mock";


import styles from './events.module.scss'

export default function Events() {
  return (
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
              link="#"
              day="25"
              month="AGO"
              face="#"
              insta="#"
            />

            <CardEvent
              title="Escola de Sacerdotes"
              text="A escola de ester veio com a inteção de moldar o carater da mulher, renovando, exortando, trazendo luz, para quebrar cadeias e grilhões, para libertar."
              img={eventsLink.sacerdotes}
              link="#"
              day="25"
              month="AGO"
              face="#"
              insta="#"
            />

            <CardEvent
              title="Retiro de Jovens"
              text="A escola de ester veio com a inteção de moldar o carater da mulher, renovando, exortando, trazendo luz, para quebrar cadeias e grilhões, para libertar."
              img={eventsLink.retiro}
              link="#"
              day="25"
              month="AGO"
              face="#"
              insta="#"
            />

            <CardEvent
              title="Praise Conference"
              text="A escola de ester veio com a inteção de moldar o carater da mulher, renovando, exortando, trazendo luz, para quebrar cadeias e grilhões, para libertar."
              img="https://placehold.co/600x400/EEE/31343C"
              link="#"
              day="25"
              month="AGO"
              face="#"
              insta="#"
            />
          </div>
        </Row>
      </Container>


    </section>
  )
}
