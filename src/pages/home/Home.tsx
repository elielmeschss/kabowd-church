import React from "react";
import Marquee from '../../components/home/marquee/Marquee'
import SliderLayout from "../../components/home/slider/Slider";
import Cards from "../../components/cardsRender/CardsRender"
import Devotionals from "../../components/home/conteudo/devotionals";
import BannerRadio from "../../components/home/conteudo/banner";
import DonationsFooter from "../../components/home/footer/donationsFooter";
import ScrollTo from "../../components/ScrollTo/ScrollTo";

export default function Home() {
  return (
    <div className="kwd-content-home">
      <SliderLayout />
      <Marquee />
      <Cards/>
      <Devotionals />
      <BannerRadio />
      <DonationsFooter />

      <ScrollTo />
    </div>
  )
}
