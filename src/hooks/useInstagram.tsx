import { useStaticQuery, graphql } from "gatsby"
export default function () {
  const instagramList = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 9, sort: { order: DESC, fields: timestamp }) {
    
          nodes {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        
      }
    }
  `)
  return instagramList
}
