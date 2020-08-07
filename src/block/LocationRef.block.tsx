import React, { useState, useEffect } from "react"
import { URL } from "../config/config"
import axios from "axios"
export interface LocationRefBlockProps {}

const LocationRefBlock: React.SFC<LocationRefBlockProps> = () => {

  const [address, setAddress] = useState({
    Address: "",
    MTimeOpen: "",
    MTimeClose: "",
    ATimeOpen: "",
    ATimeClose: "",
    ShortDescription: "",
    ReservationPhone: "",
  })
  useEffect(() => {
    const getAddress = async () => {
      const dataREST = await axios.get(`${URL}/taiko-addresses`)
      const dataAddres = dataREST.data.filter(address => address.State === true)
      setAddress(dataAddres[0])
    }
    getAddress()
  }, [])

  return (
    <section id="contact" className="container block-location">
      <div className="container block-location__open-hour">
        <h5 className="block-location__title-location">日本料理 TAIKO</h5>
        <p>
          住所：<span dangerouslySetInnerHTML={{__html: `${address.Address}`}}></span> <br />
          営業時間 <br />昼 {address.MTimeOpen.substr(0, 5)} ～
          {address.MTimeClose.substr(0, 5)} <br />夜{" "}
          {address.ATimeOpen.substr(0, 5)} ～ {address.ATimeClose.substr(0, 5)}{" "}
          <br />
          <span dangerouslySetInnerHTML={{__html: `${address.ShortDescription}`}}></span> <br />
          ご予約はお電話にて：{address.ReservationPhone} <br />
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
