import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "./../../../components/resizing/Image"

import mediasQueries from './mock/index'

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
