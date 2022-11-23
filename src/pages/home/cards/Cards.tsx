import React from "react";
import CardGenerate from "../../../components/cardsRender/CardsRender"

import './style.scss'

export default function CardsHome(){
  return (
    <div className="kwd-content-cards">
      <div className="kwd-content-ministries">
        <CardGenerate />
      </div>
    </div>
  )
}
