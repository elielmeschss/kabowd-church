import React from "react";
import { Container, Row } from 'react-bootstrap'

import styles from './contact.module.scss'

export default function Contact() {
  return (
    <section>
      <header className={styles.contactHeaderSection}>
        <div className={styles.contentHeaderTxt}>
          <span className={styles.contentSpanTxt}>Kabowd</span>
          <h1 className={styles.contentTitleHeader}>Contato</h1>
        </div>
      </header>

      <Container>
        <Row>
          <div className={styles.formContact}>
            <div className={styles.formSendMail}>
              <div className={styles.formHeaderMail}>
                <span className={styles.headerTxt}>Formulário de contato</span>
                <h2 className={styles.headerTitle}>Entre em contato conosco</h2>
              </div>


            </div>

            <div className={styles.infoContact}>
              <div className={styles.infoHeaderContact}>
                <span className={styles.headerTxt}>Localização</span>
                <h2 className={styles.headerTitle}>Informações de contato</h2>
              </div>

              <div className={styles.infoDetailsLocale}>
                <p className={styles.detaislLocale}>
                  <span className={styles.detaisInner}>Endereço:</span>
                  <a className={styles.detailsIn} href="/">R. Eurico Felicio Wan-dall, 91, Sete de Setembro - Gaspar - SC</a>
                </p>

                <p className={styles.detaislLocale}>
                  <span className={styles.detaisInner}>telefone:</span>
                  <a className={styles.detailsIn} href="/">{`(47) 99943-2521`}</a>
                </p>

                <p className={styles.detaislLocale}>
                  <span className={styles.detaisInner}>E-mail:</span>
                  <a className={styles.detailsIn} href="/">comunidadekabowd@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </Row>
      </Container>

    </section>
  )
}
