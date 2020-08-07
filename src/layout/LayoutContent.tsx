import React from "react"
import Helmet from "react-helmet"
import Header from "./Header"
export interface LayoutContentProps {}

const LayoutContent: React.SFC<LayoutContentProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default LayoutContent
