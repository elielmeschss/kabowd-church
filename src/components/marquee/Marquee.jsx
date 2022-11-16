import React from "react";
import { Container, Row } from "react-bootstrap";

import '../marquee/marquee.scss'

export default function Marquee() {
    return (
        <Container>
            <Row>
                <div className="kwd-content-marquee">
                    <div className="kwd-marquee-inner-span">
                        <p className="kwd-marquee-top-title">A IGREJA</p>
                    </div>
                    <div className="kwd-marquee-inner-title">
                        <h2 className="kwd-marquee-title">Somos uma Igreja que acredita em Jesus e
                            <br />
                            Ama a Deus acima de tudo</h2>
                    </div>
                    <div className="kwd-marquee-inner-text">
                        <p className="kwd-marquee-context">13. E aconteceu que, quando eles uniformemente tocavam as trombetas, e cantavam, para fazerem ouvir uma só voz, bendizendo e louvando ao Senhor; e levantando eles a voz com trombetas, címbalos, e outros instrumentos musicais, e louvando ao Senhor, dizendo: Porque ele é bom, porque a sua benignidade dura para sempre, então a casa se encheu de uma nuvem, a saber, a casa do Senhor; 14. E os sacerdotes não podiam permanecer em pé, para ministrar, por causa da nuvem; porque a glória do Senhor encheu a casa de Deus.</p>
                        <p className="kwd-marquee-vers">2 Crônicas 5:13-14</p>
                    </div>
                </div>
            </Row>
        </Container>
    )
}