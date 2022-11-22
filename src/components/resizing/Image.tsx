import React from "react";

interface props{
  src: any,
  dataName: string,
  dataTag: string,
  dataClass: string
}

export default function Image({src, dataName, dataTag, dataClass }: props) {

  return (
    <img src={src} alt={dataName} data-tag={dataTag} className={dataClass} />
  )

}
