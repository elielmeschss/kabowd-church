import React from "react";
import { Container, Row } from "react-bootstrap";

import styled from '../footer.module.scss'

import logo from "./../../../../assets/images/logo-horizontal.png"

import monnarka from './../../../../assets/icons/powered_monnarka.png'
import mesch from './../../../../assets/icons/powered_mesch_white.svg'

import iconFace from '../../../../assets/icons/icon-facebook.svg'
import iconInsta from '../../../../assets/icons/icon-instagram.svg'

export default function FooterMobile() {


  return (
    <>
      <Container className={styled.content_container_footer_styled}>
        <div className={styled.footer_kwd_comu}>
          <div className={styled.footer_kwd_mob}>
            <div className={styled.content_principal_institutional_mob}>
              <img src={logo} alt="logo" />

              <p>Um ministério que vem se movimentando e aplicando o Reino de Deus em sua essência!</p>

            </div>

            <div className={styled.content_menu_institutional_mob}>
              <ul className={styled.institutional_menu_footer_mob}>
                <div>
                  <li><a href="/">Home</a></li>
                  <li><a href="/sobre">Quem Somos</a></li>
                  <li><a href="/eventos">Eventos</a></li>
                </div>

                <div>
                  <li><a href="/contato">Contato</a></li>
                  <li><a href="/doacoes">Doações</a></li>
                  <li><a href="/devocionais">Devocional</a></li>
                </div>
              </ul>
            </div>

            <div className={styled.content_location_institutional_mob}>
              <div className={styled.location_content_kwd_mob}>
                <p>R. Eurico Felício Wan-Dall, 91, <br /><span>Sete de Setembro - Gaspar SC</span></p>
              </div>

              <div className={styled.telephone_content_kwd_mob}>
                <a href="https://api.whatsapp.com/send?phone=5547997735125&text=Ol%C3%A1,%20Gostaria%20de%20informa%C3%A7%C3%B5es">
                  <p>47. 99773 - 5125</p>
                </a>
              </div>
            </div>

            <div className={styled.institutional_medias}>
              <div>
                <a href="https://www.facebook.com/kabowdcomunidade">
                  <img src={iconFace} alt="Timeline Kabowd" />
                </a>
              </div>

              <div>
                <a href="https://www.instagram.com/kabowdcomunidade/">
                  <img src={iconInsta} alt="Feed Kabowd" />
                </a>
              </div>
            </div>
          </div>

          <div className={styled.copy_txt}>
            <span>@2021 - Todos os direitos reservados Kabowd</span>
          </div>
        </div>
      </Container>

      <div className={styled.footer_copy_content}>
        <Container>
          <Row>

            <div className={styled.development_footer}>
              <div className={styled.powered_images}>
                <a href="https://agenciamonnarka.com.br/" target={`__blank`}>
                  <img className={styled.monnarka_company} src={monnarka} alt="Agencia Marketing Monnarka" />
                </a>
                <a href="https://github.com/elielmeschss" target={`__blank`}>
                  <img className={styled.mesch_company} src={mesch} alt="Agencia de Desenvolvimento Digital" />
                </a>
              </div>

            </div>
          </Row>
        </Container>
      </div>
    </>
  )
}
