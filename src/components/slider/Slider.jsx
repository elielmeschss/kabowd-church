import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "../resizing/Image"

export default function SliderLayout(){
  return(
    <Carousel>
      <Carousel.Item>
        <Image/>
      </Carousel.Item>
    </Carousel>
  )
}
