import React from "react"
import CallToAction from "../components/callToAction"
import GalleryGrid from "../components/galleryGrid"
import Layout from "../components/layout"
import SEO from "../components/seo"

import CtaImg from "../images/coyote.jpg"

export default function Gallery() {
  return (
    <Layout>
      <SEO
        title="Gallery"
        description="Are you ready to reconnect with nature? Visit the online gallery of our bed and breakfast to see the types of animals you might witness during your stay!"
      />
      <GalleryGrid />
      <CallToAction
        img={CtaImg}
        title="ready to reconnect with nature?"
        description="During your stay at our B&B, you are likely to witness deer, elk, moose, coyotes, or even wolves!"
      />
    </Layout>
  )
}
