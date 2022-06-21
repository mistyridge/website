import React from "react"
import Layout from "../components/layout"
import BannerPrimary from "../components/banners/bannerPrimary"
import InfoBanner from "../components/infoBanner"
import Map from "../components/map"
import Wildlife from "../components/wildlife"
import CallToAction from "../components/callToAction"
import Offers from "../components/offers"
import SEO from "../components/seo"

import CtaImg from "../images/bed-and-breakfast-calgary.jpeg"

export default function explore() {
  return (
    <Layout>
      <SEO title="Explore" description="" />
      {/* <BannerPrimary
        title="Explore The Area"
        description="The Misty Ridge Retreat Bed & Breakfast is centrally located to many nearby attractions, you will never run out of things to do!"
        to1="/"
        link1="Home"
        to2="/explore"
        link2="Explore"
      /> */}
      <Map />
      <Wildlife />
      <CallToAction
        img={CtaImg}
        title="Never run out of things to do at our B&B!"
        description="Being located in the rolling foothills of Alberta, we are near Calgary and centrally located to many small towns while being just 40 mins from the mountains!"
      />
      <Offers />
      <InfoBanner />
    </Layout>
  )
}
