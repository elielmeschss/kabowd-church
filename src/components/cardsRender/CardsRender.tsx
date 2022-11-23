import React from "react";
import mockCards from "./mock";

import './style.scss'

interface props {
  title: string,
  text: string,
  position: any,
  styleBg: any
}

function ImgMock({ title, text, position, styleBg }: props) {
  const directionCard = { display: 'flex', flexDirection: position }

  return (
    <div className="content-card-inner" style={directionCard}>
      <div className="inner-card-info">
        <h1 className="card-inner-title">{title}</h1>
        <span className="card-inner-text">{text}</span>
      </div>
      <div className="bg-cards-inner">
        <img src={styleBg} alt={title} />
      </div>
    </div>
  )
}

export default function CardGenerate() {

  const dataWidth = window.innerWidth < 1000 
  return (

    <div className="kwd-content-ministry">
      {
        mockCards.filter((item, i) => {
          if (item.tag === "mobile" && dataWidth) return item ;
           else if (item.tag === "desktop" && !dataWidth) return item;
        }).map((newItem, i) => (
          <ImgMock key={i} title={newItem.title} text={newItem.body} position={newItem.position} styleBg={newItem.url} />
        ))
      }
    </div>

  )
}
