import React from "react"
import Slider from "react-slick"

import useNotice from "../hooks/useNotice"
import useSlideMenu from "../hooks/useSlideMenu"
import useMenu from "../hooks/useMenu"
import useAboutTaiko from "../hooks/useAboutTaiko"
export interface AddressBlockProps {}
const logo = require("../images/body-logo.svg") as string
const AddressBlock: React.SFC<AddressBlockProps> = () => {
  const dataNOTICE = useNotice()
  const dataMENUSLIDE = useSlideMenu()
  const dataMENUPDF = useMenu()
  const dataABOUT = useAboutTaiko()

  const settings = {
    centerMode: true,
    centerPadding: "50px",
    slidesToShow: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "15px",
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <section id="news" className="container-full block-address">
      <div>
        {dataNOTICE[0] ? (
          <div className="container">
            <div className="block-slide__new">
              <span>
                <b>{dataNOTICE[0].news}</b>
              </span>
              <div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: `${dataNOTICE[0].description}`,
                  }}
                ></p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="container section-about-link" id="about">
        <div className="row block-address__description-text">
          <div className="col-12">
            <img src={logo} alt="Logo taiko" />
          </div>
          <div className="col-12">
            <p
              className="block-address__title-description"
              dangerouslySetInnerHTML={{
                __html: `${dataABOUT[0].title}`,
              }}
            ></p>
          </div>
        </div>
      </div>
      <div id="menu" className="block-address__description">
        <p
          className="u-text-center block-address__description-text"
          dangerouslySetInnerHTML={{
            __html: `${dataABOUT[0].description}`,
          }}
        ></p>
      </div>
      <div className="block-address__slide">
        <div className="block-address__slide__btns">
          <a href={dataMENUPDF[0].foodMenu} target="_blank" rel="noreferrer">
            お品書き
          </a>
          <a href={dataMENUPDF[0].drinkMenu} target="_blank" rel="noreferrer">
            ドリンクメニュー
          </a>
        </div>
        {dataMENUSLIDE.length > 2 ? (
          <div className="block-address__slide__carousell">
            <Slider {...settings}>
              {dataMENUSLIDE.map((dataMENUSLIDE, i) => (
                <div key={i}>
                  {dataMENUSLIDE.image.map((imageMenu, j) => (
                    <img
                      key={j}
                      className="block-address__slide__image"
                      src={imageMenu.url}
                      alt={dataMENUSLIDE.description}
                    />
                  ))}
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="container block-address__slide__images-no-slide">
            {dataMENUSLIDE.map((dataMENUSLIDE, i) => (
              <div key={i}>
                {dataMENUSLIDE.image.map((imageMenu, j) => (
                  <img
                    key={j}
                    className="block-address__slide__no-slide"
                    src={imageMenu.url}
                    alt={dataMENUSLIDE.description}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default AddressBlock
