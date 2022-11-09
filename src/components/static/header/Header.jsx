import React from "react";
import Logo from "./logo/Logo"
import Navbar from "./navbar/Navbar";
import Login from "./login/Login"

import "./header.scss"

export default function Header(){
  return(
    <header className="kwd-header">
      <div className="content-header">
        <Logo/>
        <Navbar/>
        <Login/>
      </div>
    </header>
  )
}
