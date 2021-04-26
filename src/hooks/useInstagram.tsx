import { useStaticQuery, graphql } from "gatsby"
export default function () {
  const instagramList = useStaticQuery(graphql`
    query {
      allInstaNode{
    
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
