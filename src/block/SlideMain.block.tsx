import React from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
import topSlide from "../hooks/useTopSlides"
import { useStaticQuery, graphql } from "gatsby"
export interface SlideMainBlockProps {}
const SlideMainBlock: React.SFC<SlideMainBlockProps> = () => {
  const dataREST = topSlide()
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
          {dataREST.map((data, i) => (
            <div key={i}>
              {data.image.map((image, j) => (
                <div key={j}>
                  <img src={image.url} alt={data.description} />
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
