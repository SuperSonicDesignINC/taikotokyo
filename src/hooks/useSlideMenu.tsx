import { graphql, useStaticQuery } from "gatsby"

export default function useSlideMenu() {
  const dataSlideMenu = useStaticQuery(graphql`
    query {
      allStrapiMenuSlide(sort: { fields: Order, order: ASC }) {
        nodes {
          Description
          Image {
            url
          }
        }
      }
    }
  `)
  return dataSlideMenu
}
