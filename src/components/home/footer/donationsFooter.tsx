import React from "react";
import { Container, Row } from "react-bootstrap";

import styled from './donations.module.scss'


// const iconDonate = require("../../../assets/icons/icon-donations.svg")


export default function DonationsFooter(){
    return(
        <>
            <div className={styled.content_donations_principal}>
                <Container>
                    <Row>
                        <div className={styled.donations_title_banner}>
                            <h1>Doações</h1>
                        </div>
                        <div className={styled.donations_txt_banner}>
                            <p>Ser generoso é colocar o amor em ação. "Mas bem-aventurado é dar do que receber" (At 20:35)</p>
                        </div>
                        <div className={styled.donations_button_content}>
                            <button className={styled.button_donate_banner}>contribuir</button>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}