import React from "react"
import BannerPrimary from "../components/banners/bannerPrimary"
import Layout from "../components/layout"
import FormContact from "../components/forms/formContact"
import MapFull from "../components/mapFull"
import { Section } from "../components/layoutComponents"
import SEO from "../components/seo"
import InfoBanner from "../components/infoBanner"

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Have any questions about the Misty Ridge Retreat B&B? Use the form below to get in touch with us! We typically respond within 12 hours."
      />
      <BannerPrimary
        title="contact"
        description="Have any questions about the Misty Ridge Retreat B&B? Use the form below to get in touch with us! We typically respond within 12 hours."
        to1="/"
        link1="Home"
        to2="/contact"
        link2="Contact"
      />
      <FormContact />
      <MapFull />
      <InfoBanner />
    </Layout>
  )
}
