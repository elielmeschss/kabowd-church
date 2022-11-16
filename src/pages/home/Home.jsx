import React from "react";
import Marquee from '../../components/marquee/Marquee'
import SliderLayout from "../../components/slider/Slider";

export default function Home() {
  return (
    <div className="kwd-content-home">
      <SliderLayout />
     <Marquee/>
      <h1>Olá Mundo!</h1>
      <p>Home</p>
    </div>
  )
}
