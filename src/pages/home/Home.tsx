import React from "react";
import Marquee from '../../components/home/marquee/Marquee'
import SliderLayout from "../../components/home/slider/Slider";
import Cards from "../../components/cardsRender/CardsRender"

export default function Home() {
  return (
    <div className="kwd-content-home">
      <SliderLayout />
      <Marquee />
      <Cards/>
    </div>
  )
}
