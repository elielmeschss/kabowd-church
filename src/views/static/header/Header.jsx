import React from "react";
import Logo from "./components/logo/Logo"
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login"

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
