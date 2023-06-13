import React from "react";

import { DeskSize, MobileSize, TabletSize } from '../../../components/resizing/WindowResize'
import HeaderDesk from "./HeaderDesk/HeaderDesk";
import HeaderMob from "./HeaderMob/HeaderMob";


export default function Header() {

  return (
    <>
      <MobileSize>
        <HeaderMob />
      </MobileSize>

      <TabletSize>
        <HeaderDesk />
      </TabletSize>

      <DeskSize>
        <HeaderDesk />
      </DeskSize>
    </>
  )
}
