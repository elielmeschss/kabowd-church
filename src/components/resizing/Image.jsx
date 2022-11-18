import React from "react";

export default function Image({ src, dataName, dataTag, dataClass, maxHeight }) {

  return (
    <img src={src} alt={dataName} data-tag={dataTag} className={dataClass} height={maxHeight} />
  )

}
