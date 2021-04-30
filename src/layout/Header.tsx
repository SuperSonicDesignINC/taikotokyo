import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import useMenu from "../hooks/useMenu"
const logo = require("../images/header-logo.svg") as string
const iconMenu = require("../images/icons/icon-menu.svg") as string
const iconInstagram = require("../images/icons/instagram.svg") as string
export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  const dataMENUPDF = useMenu()
  const [menuPDF, setMenuFood] = useState({
    FoodLink: "",
    DrinkLink: "",
  })
  useEffect(() => {
    const HEADER_ELEMENT = document.querySelector(".item-header")
    const mediaQuery = window.matchMedia("(max-width: 992px)").matches
    if (!mediaQuery) {
      window.addEventListener("scroll", e => {
        if (document.documentElement.scrollTop > 780) {
          HEADER_ELEMENT?.classList.add("nav-bar-scroll")
        } else {
          HEADER_ELEMENT?.classList.remove("nav-bar-scroll")
        }
      })
    } else {
      HEADER_ELEMENT?.classList.remove("nav-bar-scroll")
    }
  }, [])
  const [showMenu, setMenu] = useState(false)

  const [menuItems] = useState([
    { id: 0, item: "お知らせ", target: "#news" },
    { id: 1, item: "TAIKO について", target: "#about" },
    { id: 2, item: "お品書き", target: "#menu" },
    {
      id: 3,
      item: "ドリンクメニュー",
      target: "#menu",
    },
    { id: 6, item: "営業時間・地図", target: "#contact" },
  ])
  // Method Menu open or close
  const handleShowMenu = () => {
    setMenu(!showMenu)
    const element_bg = document.querySelector(".bg-header")
    const element = document.querySelector(".menu-element")
    const mediaQuery = window.matchMedia("(max-width: 992px)").matches
    if (mediaQuery) {
      if (!showMenu) {
        if (element.classList.contains("hiddeMenu")) {
          element.classList.remove("hiddeMenu")
          element.classList.add("showMenu")
          element_bg.classList.add("header-bg")
        } else {
          element.classList.add("showMenu")
          element_bg.classList.add("header-bg")
        }
      } else {
        element.classList.add("hiddeMenu")
        element.classList.remove("showMenu")
        element_bg.classList.remove("header-bg")
      }
      setTimeout(() => {
        element.classList.remove("hiddeMenu")
      }, 500)
    }
  }
  return (
    <header className="content-header container-full item-header">
      <div className="bg-header" onClick={handleShowMenu}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="content-header__logo">
              <Link to={"/"}>
                <img src={logo} alt="Taiko" />
              </Link>
            </div>
          </div>
          <div className="col-lg-9 content-header__content">
            <div className="content-header__navigate menu-element">
              <nav className="content-header__nav-bottom">
                <div className="container">
                  <ul>
                    {menuItems.map((item, i) => (
                      <li
                        key={i}
                        onClick={() => scrollTo(item.target)}
                        className="breakpoint-992"
                      >
                        {i === 2 || i === 3 ? (
                          <a
                            href={
                              i === 2
                                ? dataMENUPDF[0].foodMenu
                                : i === 3
                                ? dataMENUPDF[0].drinkMenu
                                : ""
                            }
                            onClick={() => handleShowMenu()}
                            target="_blank"
                            rel="noreferrer"
                            className="u-text-capitalize"
                          >
                            {item.item}
                          </a>
                        ) : (
                          <a
                            className="u-text-capitalize"
                            onClick={() => handleShowMenu()}
                          >
                            {item.item}
                          </a>
                        )}
                      </li>
                    ))}
                    {menuItems.map((item, i) => (
                      <li
                        key={i}
                        onClick={() => scrollTo(item.target)}
                        className="responsive-class"
                      >
                        <a
                          className="u-text-capitalize"
                          onClick={() => handleShowMenu()}
                        >
                          {item.item}
                        </a>
                      </li>
                    ))}
                    <li>
                      <Link
                        to="https://www.instagram.com/nihonryouritaiko/"
                        className="display-item"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={iconInstagram} alt="Instagram" />
                        @nihonryouritaiko
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <a href="#!" className="btn-menu" onClick={() => handleShowMenu()}>
        <img src={iconMenu} alt="Menu" />
      </a>
    </header>
  )
}

export default Header
