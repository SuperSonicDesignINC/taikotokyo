import { graphql, useStaticQuery } from "gatsby"

export default function useTopSlides() {
  const topSlide = useStaticQuery(graphql`
    query {
      allStrapiTopSlide(sort: { fields: Order, order: ASC }) {
        nodes {
          id
          Image {
            url
          }
          Description
          Order
        }
      }
    }
  `)
  return topSlide.allStrapiTopSlide.nodes.map(slide => ({
    image: slide.Image,
    description: slide.Description,
  }))
}
