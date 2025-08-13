import React from "react"
import SEO from "./seo"
import HeaderBasic from "./headers/pachaHeaderBasic"
import Footer from "./footers/pachaFooter"

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <HeaderBasic />
      <main>{children}</main>
      <Footer />
    </>
  )
}

