import React from "react";
import { Container, Row } from "react-bootstrap";

import './login.scss'

export default function Login() {
  return (
    <div className="kwd-log-page">
      <Container>
        <Row>
          <div className="log-inner">
            <main>
              <input type="email" placeholder="email" />
              <input type="password" placeholder="senha"/>
              <button type="button">Recuperar Senha</button>
              <button type="button">Entrar</button>
              <button type="button">registrar</button>
            </main>
          </div>
        </Row>
      </Container>

    </div>
  )
}
