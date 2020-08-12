import { graphql, useStaticQuery } from "gatsby"

export default function useMenu() {
  const menus = useStaticQuery(graphql`
    query {
      allStrapiMenu(filter: { State: { eq: true } }) {
        nodes {
          DrinkLink
          FoodLink
        }
      }
    }
  `)
  return menus
}
