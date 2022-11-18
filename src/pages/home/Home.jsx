import React from "react";
import Marquee from '../../components/home/marquee/Marquee'
import SliderLayout from "../../components/home/slider/Slider";

export default function Home() {
  return (
    <div className="kwd-content-home">
      <SliderLayout />
      <Marquee />
      <h1>Olá Mundo!</h1>
      <p>Home</p>
    </div>
  )
}
