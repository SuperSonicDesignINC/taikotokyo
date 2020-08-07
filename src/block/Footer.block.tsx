import React from "react"

export interface FooterBlockProps {}

const FooterBlock: React.SFC<FooterBlockProps> = () => {
  return (
    <div className="container block-footer">
        <h5 className="u-text-center">Copyright 2020 <a href="taikotokyo.com">taikotokyo.com</a></h5>
    </div>
  )
}

export default FooterBlock
