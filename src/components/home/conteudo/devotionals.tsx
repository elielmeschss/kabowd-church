import React from "react";
import { Container, Row } from "react-bootstrap";

import styles from './conteudo.module.scss'

import devotionalsInner from './mock/index'

const devotion = devotionalsInner

console.log(devotion);


export default function Devotionals() {

    return (
        <Container>
            <Row>
                <div className={styles.devotional_container}>
                    <div className={styles.devotional_inner_title}>
                        <div>
                            <span>Mensagem de Deus</span>
                            <h3>devocionais</h3>
                        </div>
                    </div>
                    <div className={styles.devotional_inner_content}>
                        <div className={styles.devotional_inner_box}>
                            {devotion.map((item, i) => {
                                return (
                                    <div className={styles.devotional_box_item} key={i}>
                                        <img src={item.url} alt="" />
                                        <p className={styles.box_title}>{item.name}</p>
                                        <p className={styles.box_text}>{item.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    )
}