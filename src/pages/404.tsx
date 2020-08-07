import React from "react"
import LayoutContent from "../layout/LayoutContent"

export interface PagePropsError {}

const PageError: React.SFC<PagePropsError> = () => {
  return (
    <LayoutContent>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </LayoutContent>
  )
}

export default PageError
