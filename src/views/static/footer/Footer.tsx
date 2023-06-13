import React from "react";

import FooterDesktop from "./layout/FooterDesktop";
import FooterMobile from "./layout/FooterMobile";
import { DeskSize, MobileSize, TabletSize } from "../../../components/resizing/WindowResize";


export default function Footer() {
  const styleFooter = {
    background: `#fafafa`
  };



  return (
    <footer style={styleFooter}>

      <MobileSize>
        <FooterMobile />
      </MobileSize>

      <TabletSize>
        <FooterDesktop />
      </TabletSize>

      <DeskSize>
        <FooterDesktop />
      </DeskSize>

    </footer>
  )
}
