import React from "react"
import Layout from "../components/pachalayout"
import PachaTopBar from "../components/pachaTopBar"
import Hero from "../components/heros/pachaHero"
import Reviews from "../components/pachaReviews"
import Treatments from "../components/pachaTreatments"
import Why from "../components/pachaWhy"
import Interrupt from "../components/pachaInterrupt"  
import Team from "../components/pachaTeam"
import Clinic from "../components/pachaClinicInfoGrid"
import FeaturedFaq from "../components/pachaFaq"
import Calander from "../components/calander"
import SEO from "../components/seo"
import "../styles/pachaMamma.css"

export default function PachaMammaPage() {
  return (
    <div className="pacha-wrapper">
      <Layout>
        <SEO
          title="Pacha Mamma Massage & Sound Therapy | Relaxing Massage Near Calgary"
          description="Experience professional massage therapy and sound healing at Pacha Mamma. Located in the rolling foothills near Calgary, AB. Book your relaxing massage appointment today!"
        />
        <PachaTopBar />
        <Hero />
        <Reviews />
        <Treatments />
        <Interrupt />
        <Why />
        <Team />
        <Clinic />
        <Calander />
        <FeaturedFaq />
        <PachaTopBar />
      </Layout>
    </div>
  )
}