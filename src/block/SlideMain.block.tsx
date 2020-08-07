import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import axios from "axios"
import { URL } from "../config/config"

export interface SlideMainBlockProps {}
const SlideMainBlock: React.SFC<SlideMainBlockProps> = () => {
  const [dataSlide, setDataSlide] = useState([])
  useEffect(() => {
    const getSlides = async () => {
      const data = await axios.get(`${URL}/top-slides`)
      const dataSLIDES = data.data.sort((a, b) => a.Order - b.Order)
      setDataSlide(dataSLIDES)
    }
    getSlides()
  }, [])
  const settings = {
    fade: true,
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  }
  return (
    <section className="container-full">
      <div className="block-slide">
        <Slider {...settings}>
          {dataSlide.map((data, i) => (
            <div key={i}>
              {data.Image.map((image, j) => (
                <div key={j}>
                  <img src={image.url} alt={data.Description} />
                </div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default SlideMainBlock
