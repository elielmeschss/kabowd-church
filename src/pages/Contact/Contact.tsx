import React from "react";
import { Container, Row } from 'react-bootstrap'

import styles from './contact.module.scss'
import FormContact from "../../components/contact/FormContact";
import { AllWindows } from "../../components/resizing/WindowResize";

export default function Contact() {
  return (
    <AllWindows>
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
                <div>
                  <FormContact />
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
                    <a className={styles.detailsIn} target="_blank" href="https://www.google.com/maps/dir//comunidade+kabowd/@-26.9130161,-48.9805235,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94df24a33a87b421:0x35dd2d2748772913!2m2!1d-48.939324!2d-26.9130986?entry=ttu" rel="noreferrer">R. Eurico Felicio Wan-dall, 91, Sete de Setembro - Gaspar - SC</a>
                  </p>

                  <p className={styles.detaislLocale}>
                    <span className={styles.detaisInner}>telefone:</span>
                    <a className={styles.detailsIn} target="_blank" href="https://api.whatsapp.com/send?phone=5547999432521&text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es!" rel="noreferrer">{`(47) 99943-2521`}</a>
                  </p>

                  <p className={styles.detaislLocale}>
                    <span className={styles.detaisInner}>E-mail:</span>
                    <a className={styles.detailsIn} href="mailto:comunidadekabowd@gmail.com">comunidadekabowd@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </Container>

      </section>
    </AllWindows>
  )
}
