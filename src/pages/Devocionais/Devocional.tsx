import React from "react";
import { AllWindows } from "../../components/resizing/WindowResize";
import { Container, Row } from "react-bootstrap";


import styles from './devocional.module.scss'

export default function Devocional() {
  return (
    <AllWindows>
      <section>

        <div className={styles.mainPageDevotional}>
          <Container>
            <Row>
              <div className={styles.pageSidesMenu}>
                <div className={styles.devotionalsMenuSide}>
                  Menu Devocional
                </div>

                <div className={styles.devotionalsSide}>
                  Devocinal selecionado
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </section>
    </AllWindows>
  )
}
