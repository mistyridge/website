import React from "react"
import Layout from "../components/layout"
import BannerPrimary from "../components/banners/bannerPrimary"
import InfoBanner from "../components/infoBanner"
import Rooms from "../components/rooms"
import HouseInfo from "../components/houseInfo"
import CallToAction from "../components/callToAction"
import Offers from "../components/offers"
import SEO from "../components/seo"

export default function Suites() {
  return (
    <Layout>
      <SEO
        title="Rooms & Suites"
        description="We offer cozy spa-like beds and bathrooms that you won’t want to leave!"
      />
      <BannerPrimary
        title="Rooms & Suites"
        description="We offer cozy spa-like beds and bathrooms that you won’t want to leave!"
        to1="/"
        link1="Home"
        to2="/suites"
        link2="Rooms & Suites"
      />

      <Rooms />
      <HouseInfo />
      <Offers />
      <InfoBanner />
    </Layout>
  )
}
