import React from "react";

import HeaderDesk from "./HeaderDesk/HeaderDesk";
import HeaderMob from "./HeaderMob/HeaderMob";

export default function Header() {
  const isMobile = window.innerWidth > 768

  return (
    <>
      {isMobile ? <HeaderDesk /> : <HeaderMob />}
    </>
  )
}
