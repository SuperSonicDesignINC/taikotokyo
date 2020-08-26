import { graphql, useStaticQuery } from "gatsby"

export default function useAddress() {
  const dataREST = useStaticQuery(graphql`
    query {
      allStrapiTaikoAddress(filter: { State: { eq: true } }) {
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
  return dataREST.allStrapiTaikoAddress.nodes.map(menu => ({
    aTimeClose: menu.ATimeClose,
    aTimeOpen: menu.ATimeOpen,
    address: menu.Address,
    mTimeClose: menu.MTimeClose,
    mTimeOpen: menu.MTimeOpen,
    reservationPhone: menu.ReservationPhone,
    shortDescription: menu.ShortDescription,
  }))
}
