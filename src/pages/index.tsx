import React, {useEffect} from "react"
import LayoutContent from "../layout/LayoutContent"
import SlideMainBlock from "../block/SlideMain.block"
import AddressBlock from "../block/Address.block"
import LocationRefBlock from "../block/LocationRef.block"
import FooterBlock from "../block/Footer.block"
import InstagramFeedBlock from "../block/InstagramFeed.block"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

export interface IndexPageProps {}
const IndexPage: React.SFC<IndexPageProps> = () => {
  useEffect(() => {
    window.console.log = () => {}
  }, []);
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
