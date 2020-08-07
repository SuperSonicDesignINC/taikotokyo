import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
export interface SEOProps {
  description: any
  lang: any
  meta: any
  title: any
  image: any
  article: any
}

const SEO: React.SFC<SEOProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
        }
      }
    }
  `)
  return (
    <Helmet>
      <html lang="ja" />
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="image" content={data.site.siteMetadata.image} />
    </Helmet>
  )
}

export default SEO
