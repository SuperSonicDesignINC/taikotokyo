import { graphql, useStaticQuery } from "gatsby"

export default function useNotice() {
  const queryNotice = useStaticQuery(graphql`
    query MyQuery {
      allStrapiNotice(filter: { State: { eq: true }, Link: {} }) {
        nodes {
          Description
          News
          Link
        }
      }
    }
  `)
  return queryNotice
}
