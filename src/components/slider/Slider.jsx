import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "../resizing/Image"

import KwdFamilia from "../../assets/images/banner-familia-culto.png"
import KwdQuinta from "../../assets/images/banner-quinta-culto.png"
import KwdQuarta from "../../assets/images/banner-oracao-culto.png"
import KwdHomens from "../../assets/images/Homens-honra-mobile.png"
import KwdMulheres from "../../assets/images/Mulheres-Valor-mobile.png"
import KwdKids from "../../assets/images/Kabowd-Kids-mobile.png"

const mediasQueries = [
  {
    url: KwdFamilia,
    name: "Culto Família",
    tag: "desktop",
    class: "image-item-desktop"
  }, {
    url: KwdQuarta,
    name: "Culto Quarta",
    tag: "desktop",
    class: "image-item-desktop"
  }, {
    url: KwdQuinta,
    name: "Culto Quinta",
    tag: "desktop",
    class: "image-item-desktop"
  }, {
    url: KwdHomens,
    name: "Culto Família",
    tag: "mobile",
    class: "image-item-mobile"
  }, {
    url: KwdMulheres,
    name: "Culto Quarta",
    tag: "mobile",
    class: "image-item-mobile"
  }, {
    url: KwdKids,
    name: "Culto Quinta",
    tag: "mobile",
    class: "image-item-mobile"
  }]

const innerWidth = window.innerWidth < 1024

export default function SliderLayout() {

  return (
    <Carousel>
      {
        mediasQueries.filter((item) => {
          if (item.tag === 'mobile' && innerWidth) {
            return item.url
          } else if (item.tag === 'desktop' && !innerWidth) {
            return item.url
          }
        }).map((newurl, i) => (
          <Carousel.Item key={i}>
            <Image src={newurl.url} dataName={newurl.name} dataTag={newurl.tag} dataClass={`d-block w-100 ${newurl.class}`} />
          </Carousel.Item>
        ))
      }
    </Carousel>
  )
}
