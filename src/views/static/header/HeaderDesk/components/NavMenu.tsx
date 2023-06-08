import React from "react";

import styles from '../headerDesk.module.scss'

interface PathProps {
  href: string
  children: any
}

function CustomLink({ ...props }: PathProps) {
  const path = window.location.pathname
  return (
    <li className={path === props.href ? `${styles.active}` : ""}>
      <a href={props.href}>{props.children}</a>
    </li>
  )
}

export default function NavMenu() {
  return (
    <>
      <div className={`${styles.content_header_inner} ${styles.kwd_inner_menu}`}>
        <nav className={styles.kwd_menu}>
          <ul className={styles.kwd_list_menu}>
            <CustomLink href="/">Início</CustomLink>
            <CustomLink href="/sobre">Quem Somos</CustomLink>
            <CustomLink href="/eventos">Eventos</CustomLink>
            <CustomLink href="/contato">Contato</CustomLink>
            <CustomLink href="/radio">Rádio</CustomLink>
          </ul>
        </nav>
      </div>
    </>
  )
}
