import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
// import useInstagram from "../hooks/useInstagram"
export interface InstagramFeedBlockProps {}

const InstagramFeedBlock: React.SFC<InstagramFeedBlockProps> = () => {
  const iconInstagram = require("../images/icons/instagram.svg") as string  
  return (
    <div id="chef" className="container instagram-block">
      <div className="instagram-block__title">
        <Link
          to="https://www.instagram.com/nihonryouritaiko/"
          rel="noreferrer"
          target="_blank"
          className="instagram-block__title__link"
        >
          <img src={iconInstagram} alt="Instagram" /> @nihonryouritaiko
        </Link>
      </div>
      <div className="container">
        <div className="row">
          <iframe
            className="instagram-feed"
            src="https://embedsocial.com/facebook_album/pro_instagram/487aa8b6278b7cbb890f112dfb8b17e65e527637"
            frameBorder="0"
          ></iframe>

        </div>
      </div>
    </div>
  )
}

export default InstagramFeedBlock
