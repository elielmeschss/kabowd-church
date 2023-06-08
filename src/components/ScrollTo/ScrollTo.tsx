import React from "react";

import upScroll from '../../assets/icons/scroll-up.svg'

import styles from './scrollTo.module.scss'

export default function ScrollTo() {

  const handleScrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div className={styles.mainScrollToTop}>
        <div className={styles.scrollToTop_inner} onClick={handleScrollToTop}>
          <img src={upScroll} alt="Voltar ao Topo" />
        </div>
      </div>
    </>
  )
}
