import React from "react";

import './style.scss'


interface Tiptip {
  minimal: string;
  title: string;
  texta: string;
  textb: string;
  textc: string;
  textd: string;
  ass: string;
  url: string
}

export default function CardsTip({
  minimal,
  title,
  texta,
  textb,
  textc,
  textd,
  ass,
  url }: Tiptip) {
  return (
    <div className="cardtip-main-tip">
      <div className="cardtip-box-description">
        <span className="cardtip-emph-txt">{minimal}</span>
        <h1 className="cardtip-title">{title}</h1>

        <div className="cardtip-box-images mobile-devices">
          <img src={url} alt={minimal} />
        </div>

        <p className="cardtip-emph-description description-a">{texta}</p>
        <p className="cardtip-emph-description description-b">{textb}</p>
        <p className="cardtip-emph-description description-c">{textc}</p>
        <p className="cardtip-emph-description description-d">{textd}</p>
        <strong className="cardtip-emph-signature">{ass}</strong>
      </div>

      <div className="cardtip-box-images desktop-devices">
        <img src={url} alt={minimal} />
      </div>
    </div>
  )
}
