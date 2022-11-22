import React from "react";
import Marquee from './marquee/Marquee'
import SliderLayout from "./slider/Slider";
import Cards from "./cards/Cards"

export default function Home() {
  return (
    <div className="kwd-content-home">
      <SliderLayout />
      <Marquee />
      <Cards/>
    </div>
  )
}
