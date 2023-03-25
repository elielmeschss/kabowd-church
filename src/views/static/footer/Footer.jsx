import React from "react";
import { Container, Row } from "react-bootstrap";

import styled from './footer.module.scss'

import logo from "./../../../assets/images/logo-horizontal.png"


export default function Footer() {

    return (
        <>
            <Container>
                <Row>
                    <div className={styled.footer_kwd_comu}>
                        <div className={styled.footer_kwd}>
                            <div className={styled.content_principal_institutional}>
                                <img src={logo} alt="logo" />

                                <p>Um ministério que vem se movimentando e aplicando o Reino de Deus em sua essência!</p>

                                <div className={styled.institutional_medias}>

                                </div>
                            </div>

                            <div className={styled.content_menu_institutional}>
                                <ul className={styled.institutional_menu_footer}>
                                    <div>
                                        <li>Home</li>
                                        <li>Quem Somos</li>
                                        <li>Eventos</li>
                                    </div>

                                    <div>
                                        <li>Contato</li>
                                        <li>Doações</li>
                                        <li>Devocional</li>
                                    </div>
                                </ul>
                            </div>

                            <div className={styled.content_location_institutional}>
                                <div>
                                    <p>R. Eurico Felício Wan-Dall, 91, <span>Sete de Setembro - Gaspar SC</span></p>
                                </div>
                                <div>
                                    <p>47. 99943 - 2521</p>
                                </div>
                            </div>
                        </div>

                        <div className={styled.footer_copy_content}>
                            <div>
                                <span>@2021 - Todos os direitos reservados Kabowd</span>
                            </div>
                            <div>
                                <span>icone mesch</span>
                                <span>icone wagner</span>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}