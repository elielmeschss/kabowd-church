import React from "react";

import "./Navbar.scss"

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href}>{children}</a>
    </li>
  )
}

export default function Navbar() {
  return (
    <div className="content-header-inner kwd-inner-menu">
      <nav className="kwd-menu">
        <ul className="kwd-list-menu">
          <CustomLink href="/">Inicio</CustomLink>
          <CustomLink href="/sobre">Quem Somos</CustomLink>
          <CustomLink href="/eventos">Eventos</CustomLink>
          <CustomLink href="/contato">Contato</CustomLink>
          <CustomLink href="/radio">Rádio</CustomLink>
        </ul>
      </nav>
    </div>

  )
}
