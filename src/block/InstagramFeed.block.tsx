import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import InstagramFeed from "react-ig-feed"
import "react-ig-feed/dist/index.css"
export interface InstagramFeedBlockProps {}

const InstagramFeedBlock: React.SFC<InstagramFeedBlockProps> = () => {
  const iconInstagram = require("../images/icons/instagram.svg") as string
  const token_access =
    "IGQVJXX0lfUG9GWEVCODJnT2JiZA2k4d3piQ3JBQ2Q1ZADcwSkVmUkFzUldHcmJmZAlYwc2puQ09EQThZAYzB5aFpHR2hhaTdRYmtoTnFrU0d2ZAkx2TzZAlUmF5ZAlgtalNXOUhGYl9TSWFka1FRTHlwZAUVSNAZDZD"
  return (
    <div id="chef" className="container instagram-block">
      <div className="instagram-block__title">
        <a
          href="https://www.instagram.com/nihonryouritaiko/"
          rel="noreferrer"
          target="_blank"
          className="instagram-block__title__link"
        >
          <img src={iconInstagram} alt="Instagram" /> @nihonryouritaiko
        </a>
      </div>
      <div className="container">
        <div className="row">
          {/* <iframe
            className="instagram-feed"
            src="https://embedsocial.com/facebook_album/pro_instagram/487aa8b6278b7cbb890f112dfb8b17e65e527637"
            frameBorder="0"
          ></iframe> */}

          <InstagramFeed token={token_access} counter="20" />
          {/* {dataREST.allInstaNode.nodes.map((image, i) => (
              <div key={i} className="col-lg-4 col-md-6 instagram-block__item">
                <Img fluid={image.localFile.childImageSharp.fluid} />
              </div>
            ))}  */}
        </div>
      </div>
    </div>
  )
}

export default InstagramFeedBlock
