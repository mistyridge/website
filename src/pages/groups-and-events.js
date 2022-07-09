import React from "react"
import Layout from "../components/layout"
import Offers from "../components/offers"
import SEO from "../components/seo"
import InfoBanner from "../components/infoBanner"

export default function GroupsEvents() {
  return (
    <Layout>
      <SEO
        title="Groups and Events"
        description="The Misty Ridge Retreat B&B can host a variety of small and large events such as weddings, yoga retreats, honey moons, and more! Ask as about the packages we can offer for you upcoming event!"
      />
      <Offers />
      <InfoBanner />
    </Layout>
  )
}
