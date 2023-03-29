import React from "react";
import iconlog from './../../../../../assets/icons/login-icon.svg'

import "./login.scss"

export default function Login(){
  return(
    <div className="content-header-inner kwd-inner-login">
      <div className="login-inner">
          <button type="submit">Login</button>
          <img src={iconlog} alt="Icone Login" />
      </div>
    </div>
  )
}
