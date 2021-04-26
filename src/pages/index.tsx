import React from "react"
import LayoutContent from "../layout/LayoutContent"
import SlideMainBlock from "../block/SlideMain.block"
import AddressBlock from "../block/Address.block"
import LocationRefBlock from "../block/LocationRef.block"
import FooterBlock from "../block/Footer.block"
import InstagramFeedBlock from "../block/InstagramFeed.block"
import SEO from "../components/seo"
import useInstagram from "../hooks/useInstagram"
export interface IndexPageProps {}

const IndexPage: React.SFC<IndexPageProps> = () => {
  const dataInstagram = useInstagram()
  console.log(dataInstagram.allInstaNode.nodes)
  return (
    <LayoutContent>
      <SEO />      
      <SlideMainBlock />
      <AddressBlock />
      {/* <InstagramFeedBlock /> */}
      <LocationRefBlock />
      <FooterBlock />
    </LayoutContent>
  )
}

export default IndexPage
