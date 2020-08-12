import React from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
import topSlide from "../hooks/useTopSlides"
export interface SlideMainBlockProps {}
const SlideMainBlock: React.SFC<SlideMainBlockProps> = () => {

  
  const dataREST = topSlide()
  const slides = dataREST.allStrapiTopSlide.nodes

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
          {slides.map((data, i) => (
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
