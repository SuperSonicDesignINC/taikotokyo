import { graphql, useStaticQuery } from "gatsby"

export default function () {
  const dataREST = useStaticQuery(graphql`
    query {
      allStrapiTaikoAddress(filter: {State: {eq: true}}) {      
        nodes {
          ATimeClose
          ATimeOpen
          Address
          MTimeClose
          MTimeOpen
          ReservationPhone
          ShortDescription
        }
      }
    }
  `)
  return dataREST
}
