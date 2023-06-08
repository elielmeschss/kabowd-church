import React, { useState } from "react";
import SideMenu from "./components/SideMenu";
import styles from './headerMob.module.scss'
import hbMenu from '../../../../assets/icons/hamburguer-menu.svg'
import logoMob from '../../../../assets/images/logo-horizontal.png'

export default function HeaderMob() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <div className={styles.main_header}>
        <div className={styles.mainHeader_logoContent} >
          <a href="/">
            <img src={logoMob} alt="" />
          </a>
        </div>

        <div className={styles.side_button_menu}>
          <div className={styles.side_button_hamburguerMenu} onClick={handleMenuToggle}>
            <img src={hbMenu} alt="menu" />
          </div>
        </div>
      </div>
      <SideMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </>
  )
}
