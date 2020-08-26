import { graphql, useStaticQuery } from "gatsby"

export default function useNotice() {
  const queryNotice = useStaticQuery(graphql`
    query MyQuery {
      allStrapiNotice(filter: { State: { eq: true }}) {
        nodes {
          Description
          News
          LinkNotice
        }
      }
    }
  `)
  return queryNotice.allStrapiNotice.nodes.map(notice => ({
    description: notice.Description,
    news: notice.News,
    link: notice.LinkNotice
  }))
}
