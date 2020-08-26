import { graphql, useStaticQuery } from "gatsby"

export default function useAboutTaiko() {
  const dataREST = useStaticQuery(graphql`
    query {
      allStrapiAboutTaiko(filter: { State: { eq: true } }) {
        nodes {
          Description
          Title
        }
      }
    }
  `)
  return dataREST.allStrapiAboutTaiko.nodes.map(aboutTaiko => ({
    description: aboutTaiko.Description,
    title: aboutTaiko.Title,
  }))
}
