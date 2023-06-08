import React from "react";
import NavMenu from "./components/NavMenu";

import styles from './headerDesk.module.scss'
import iconlog from '../../../../assets/icons/login-icon.svg'
import logo from '../../../../assets/images/logo-horizontal.png'



export default function HeaderDesk() {
  return (
    <>
      <header className={styles.kwd_header}>
        <div className={styles.content_header}>
          <div className={`${styles.content_header_inner} ${styles.kwd_inner_logo}`}>
            <a href="/">
              <img className={styles.kwd_logo} src={logo} alt="Logo Kabowd" />
            </a>
          </div>

          <NavMenu />

          <div className={`${styles.content_header_inner} ${styles.kwd_inner_login}`}>
            <div className={styles.login_inner}>
              <button type="submit">Login</button>
              <img src={iconlog} alt="Icone Login" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
