import React from "react"
import LayoutContent from "../layout/LayoutContent"

export interface PagePropsError {}

const PageError: React.SFC<PagePropsError> = () => {
  const logoTaiko = require("../images/taiko-icon.png")
  return (
    <LayoutContent>
      <div className="container">
        <h2 style={{paddingTop: '5em'}}>404 NOT FOUND </h2>
        <img src={logoTaiko} width="150px" alt="Taiko Tokyo" />
      </div>
    </LayoutContent>
  )
}

export default PageError
