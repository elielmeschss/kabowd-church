
import React from "react";
import KwdFamilia from "../../assets/images/banner-familia-culto.png"

import HomensGp from "../../assets/images/homens-gp-kwd.png"

function Img({src, data_tag, data_name, maxWidth, ...props }){
  return (
    <img src={src} className={data_name} data-tag={data_tag} width={maxWidth}/>
  )
}


export default function Image(){


  const normal = KwdFamilia
  const mobile = HomensGp

  let src
  let dataTag
  let maxWidth

  if(window.innerWidth < 768){
    dataTag = "mobile"

    maxWidth = window.innerWidth
    src = mobile
  }else {
    dataTag = "normal"

    maxWidth = window.innerWidth
    src = normal
  }

  return(
    <Img src={src} data_tag={dataTag} data_name="d-block w-100" maxWidth={maxWidth}/>
  )

}
