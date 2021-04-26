import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import useInstagram from "../hooks/useInstagram"
export interface InstagramFeedBlockProps {}

const InstagramFeedBlock: React.SFC<InstagramFeedBlockProps> = () => {
  const iconInstagram = require("../images/icons/instagram.svg") as string
  const dataInstagram = useInstagram()
  // console.log(dataInstagram.allInstaNode.edges[0].node.localFile.childImageSharp.fluid)
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
           {dataInstagram.allInstaNode.nodes.map((image, i) => (
            <div key={i} className="col-lg-4 col-md-6 instagram-block__item">
               <Img fluid={image.localFile.childImageSharp.fluid} />
            </div>
          ))} 
        </div>
      </div>
    </div>
  )
}

export default InstagramFeedBlock
