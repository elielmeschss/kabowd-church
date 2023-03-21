import React from "react";
import { Container, Row } from "react-bootstrap";

import styles from './conteudo.module.scss'

const logoRadio = require("../../../assets/icons/icon-radio.png")
const listenRadio = require("../../../assets/images/radio/radio-right.png")



export default function BannerRadio() {
    return (
        <Container>
            <Row>
                <div className={styles.banner_content_radio}>
                    <div className={styles.content_inner_radio}>
                        <div className={styles.logo_kwd}>
                            <img src={logoRadio} alt="" />
                        </div>
                        <div className={styles.info_radio_banner}>
                            <p className={styles.texts_radio_banner}>
                                <span className={styles.first_txt}>DEUS</span>
                                <span className={styles.second_txt}>tem uma</span>
                                <span className={styles.third_txt}>Palavra</span>
                                <br/>
                                <span className={styles.frd_text}>Para Você!</span>
                            </p>
                        </div>
                        <div className={styles.info_radio_button}>
                            <a href="/radio">
                                <div className={styles.banner_button}>
                                    <span>Ouvir Rádio</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={styles.content_inner_image}>
                        <div>
                            <img src={listenRadio} alt="KWD Rádio Gospel" />
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    )
}