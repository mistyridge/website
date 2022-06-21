import React from "react"
import Layout from "../components/layout"
import BannerPrimary from "../components/banners/bannerPrimary"
import Bio from "../components/bio"
import SEO from "../components/seo"
import InfoBanner from "../components/infoBanner"

export default function About() {
  return (
    <Layout>
      <SEO title="About Our B&B" description="" />
      <BannerPrimary
        title="welcome to our little peice of paradise"
        description="Book now to get away from it all! Enjoy a scrumptious breakfast with absolutely stunning scenery, walking trails, wildlife, outdoor gathering spaces, and much more!"
        to1="/"
        link1="Home"
        to2="/about"
        link2="About"
      />
      <Bio />
      <InfoBanner />
    </Layout>
  )
}
