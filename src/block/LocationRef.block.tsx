import React, { useState, useEffect } from "react"
import { URL } from "../config/config"
import axios from "axios"
import useAddress from "../hooks/useAddress"
export interface LocationRefBlockProps {}

const LocationRefBlock: React.SFC<LocationRefBlockProps> = () => {
  const dataADDRESS = useAddress()
  return (
    <section id="contact" className="container block-location">
      <div className="container block-location__open-hour">
        <h5 className="block-location__title-location">日本料理 TAIKO</h5>
        <p>
          住所：<span dangerouslySetInnerHTML={{__html: `${dataADDRESS[0].address}`}}></span> <br />
          営業時間 <br />昼 {dataADDRESS[0].mTimeOpen.substr(0, 5)}～
          {dataADDRESS[0].mTimeClose.substr(0, 5)} <br />夜
          {dataADDRESS[0].aTimeOpen.substr(0, 5)}～{dataADDRESS[0].aTimeClose.substr(0, 5)}
          <br />
          <span dangerouslySetInnerHTML={{__html: `${dataADDRESS[0].shortDescription}`}}></span> <br />
          ご予約はお電話にて：{dataADDRESS[0].reservationPhone} <br />
        </p>
      </div>
      <iframe
        title="Taikotokyo location"
        className="block-location__map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.0004490701954!2d139.53512951540557!3d35.72620748018384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018efcf9543f543%3A0x1b381c5eb9bc1b!2z5pel5pys5paZ55CGVEFJS08!5e0!3m2!1sja!2sus!4v1594909627747!5m2!1sja!2sus"
        aria-hidden="false"
      ></iframe>
    </section>
  )
}

export default LocationRefBlock
