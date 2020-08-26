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
  return menus.allStrapiMenu.nodes.map(menu => ({
    drinkMenu: menu.DrinkLink,
    foodMenu: menu.FoodLink
  }))
}
