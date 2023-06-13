import React from "react";
import Marquee from '../../components/home/marquee/Marquee'
import SliderLayout from "../../components/home/slider/Slider";
import Cards from "../../components/home/cards/Cards"
import Devotionals from "../../components/home/conteudo/devotionals";
import BannerRadio from "../../components/home/conteudo/banner";
import DonationsFooter from "../../components/home/footer/donationsFooter";
import ScrollTo from "../../components/ScrollTo/ScrollTo";
import { AllWindows } from "../../components/resizing/WindowResize";

export default function Home() {
  return (
    <AllWindows>
      <div className="kwd-content-home">
        <SliderLayout />
        <Marquee />
        <Cards />
        <Devotionals />
        <BannerRadio />
        <DonationsFooter />

        <ScrollTo />
      </div>
    </AllWindows>
  )
}
