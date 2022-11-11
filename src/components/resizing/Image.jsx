import React from "react";

export default function Image({ src, dataName, dataTag, dataClass, maxHeight }) {

  // if(window.innerWidth < 769){
  //   maxHeight = 250
  // }else if(window.innerWidth < 1024 && window.innerWidth > 768  ) {
  //   maxHeight = 350
  // }


  return (
    <img src={src} alt={dataName} data-tag={dataTag} className={dataClass} height={maxHeight} />
  )

}
