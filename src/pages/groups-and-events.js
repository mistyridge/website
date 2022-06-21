import React from "react"
import Layout from "../components/layout"
import Offers from "../components/offers"
import SEO from "../components/seo"
import InfoBanner from "../components/infoBanner"

export default function GroupsEvents() {
  return (
    <Layout>
      <SEO title="Groups and Events" description="" />
      <Offers />
      <InfoBanner />
    </Layout>
  )
}
