import React, { useState, useEffect } from "react"
import Slider from "react-slick"
import axios from "axios"
import { URL } from "../config/config"
export interface AddressBlockProps {}
const logo = require("../images/body-logo.svg") as string
const AddressBlock: React.SFC<AddressBlockProps> = () => {
  // About taiko
  const [slideMenu, setSlideMenu] = useState([])
  const [menu, setMenu] = useState({
    FoodLink: "",
    DrinkLink: "",
  })

  const [aboutTaiko, setAboutTaiko] = useState({
    Description: "",
    Title: "",
  })
  // Notice taiko
  const [notice, setNotice] = useState({
    Description: "",
    Link: "",
    News: "",
  })
  const [activeState, setActiveState] = useState(false)
  useEffect(() => {
    const mediaSmarth = window.matchMedia("(max-width: 992px)").matches
    if (!mediaSmarth) {
      setActiveState(mediaSmarth)
    } else {
      setActiveState(mediaSmarth)
    }

    // Get Notice
    const getNotice = async () => {      
      const dataREST = await axios.get(`${URL}/notices`)
      const noticeFilter = dataREST.data.filter(notice => notice.State === true)
      if (noticeFilter[0] === undefined) {
        setNotice(noticeFilter[0])
      } else {
        setNotice(noticeFilter[0])
      }
    }
    getNotice()
    // Get About TAIKO
    const getAboutTaiko = async () => {
      const dataREST = await axios.get(`${URL}/about-taikos`)
      const dataAboutTaiko = dataREST.data.filter(about => about.State === true)
      setAboutTaiko(dataAboutTaiko[0])
    }
    getAboutTaiko()
    // Get menu
    const getMenu = async () => {
      const datREST = await axios.get(`${URL}/menus`)
      const dataMENU = datREST.data.filter(menu => menu.State === true)
      setMenu(dataMENU[0])
    }
    getMenu()

    const getSlidesMenu = async () => {
      const dataREST = await axios.get(`${URL}/menu-slides`)
      const dataSLIDEMENU = dataREST.data.sort((a, b) => a.Order - b.Order)
      setSlideMenu(dataSLIDEMENU)
    }
    getSlidesMenu()
  }, [])

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
    <section id="about" className="container-full block-address">
      {notice ? (
        <div className="container">
          <div className="block-slide__new">
            <span>お知らせ</span>
            <p>
              <span
                dangerouslySetInnerHTML={{
                  __html: `${notice.Description}`,
                }}
              ></span>
              {notice.Link !== null ? (
                <a href={notice.Link} target="_blank" rel="noreferrer">
                  {notice.News}
                </a>
              ) : (
                ""
              )}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="container">
        <div className="row block-address__description-text">
          <div className="col-12">
            <img src={logo} alt="Logo taiko" />
          </div>
          <div className="col-12">
            <p
              className="block-address__title-description"
              dangerouslySetInnerHTML={{
                __html: `${aboutTaiko.Title}`,
              }}
            ></p>
          </div>
        </div>
      </div>
      <div id="menu" className="block-address__description">
        <p
          className="u-text-center block-address__description-text"
          dangerouslySetInnerHTML={{
            __html: `${aboutTaiko.Description}`,
          }}
        ></p>
      </div>
      <div className="block-address__slide">
        <div className="block-address__slide__btns">
          <a href={menu.FoodLink} target="_blank" rel="noreferrer">
            お品書き
          </a>
          <a href={menu.DrinkLink} target="_blank" rel="noreferrer">
            ドリンクメニュー
          </a>
        </div>
        {slideMenu.length > 2 ? (
          <div className="block-address__slide__carousell">
            <Slider {...settings}>
              {slideMenu.map((dataSlideMenu, i) => (
                <div key={i}>
                  {dataSlideMenu.Image.map((imageMenu, j) => (
                    <img
                      key={j}
                      className="block-address__slide__image"
                      src={imageMenu.url}
                      alt={dataSlideMenu.Description}
                    />
                  ))}
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="container block-address__slide__images-no-slide">
            {slideMenu.map((dataSlideMenu, i) => (
              <div key={i}>
                {dataSlideMenu.Image.map((imageMenu, j) => (
                  <img
                    key={j}
                    className="block-address__slide__no-slide"
                    src={imageMenu.url}
                    alt={dataSlideMenu.Description}
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
