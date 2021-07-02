import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
export interface InstagramFeedBlockProps {}

const InstagramFeedBlock: React.SFC<InstagramFeedBlockProps> = () => {
  const iconInstagram = require("../images/icons/instagram.svg") as string
  const dataREST = useStaticQuery(graphql`
    query {
      allInstaNode {
        nodes {
          localFile {
            publicURL
          }
        }
      }
    }
  `)
  console.log(dataREST)
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
          {/* <iframe
            className="instagram-feed"
            src="https://embedsocial.com/facebook_album/pro_instagram/487aa8b6278b7cbb890f112dfb8b17e65e527637"
            frameBorder="0"
          ></iframe> */}
          {/* <iframe
            className="instagram-feed"
            src="https://embedsocial.com/facebook_album/pro_instagram/487aa8b6278b7cbb890f112dfb8b17e65e527637"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          ></iframe>  */}

          {dataREST.allInstaNode.nodes.map((image, i) => (
            <div key={i} className="col-lg-3 col-md-6 instagram-block__item">
              {/* <Img fluid={image.localFile.childImageSharp.fluid} /> */}
              <img src={image.localFile.publicURL} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InstagramFeedBlock
