import React from "react";

import styles from '../headerMob.module.scss'

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

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

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`${styles.side_menu} ${isOpen ? `${styles.open}` : ''}`}>
        <div className={styles.overlay} onClick={onClose}>x</div>
        <div className={styles.menu_content}>
          <ul>
            <CustomLink href="/">Início</CustomLink>
            <CustomLink href="/sobre">Quem Somos</CustomLink>
            <CustomLink href="/eventos">Eventos</CustomLink>
            <CustomLink href="/contato">Contato</CustomLink>
            <CustomLink href="/radio">Rádio</CustomLink>
          </ul>
        </div>

        <div className={styles.side_menu_footerSocial}>
          <div className={styles.socialMedias_facebook}>
            <a href="https://www.facebook.com/kabowdcomunidade">

            </a>
          </div>

          <div className={styles.socialMedias_instagram}>
            <a href="https://www.instagram.com/kabowdcomunidade/">

            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideMenu

