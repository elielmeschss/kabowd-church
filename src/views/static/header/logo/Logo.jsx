import React from "react";
import logo from "./../../../../assets/images/logo-horizontal.png"
import "./logo.scss"

export default function Logo(){
  return(
    <div className="content-header-inner kwd-inner-logo">
      <img className="kwd-logo" src={logo} alt="Logo Kabowd" />
    </div>
  )
}
