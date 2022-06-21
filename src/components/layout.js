import React from "react"
import SEO from "./seo"
import HeaderBasic from "./headers/headerBasic"
import CallToAction from "./callToAction"
import Footer from "./footers/footer"

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
