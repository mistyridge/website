import React from "react"
import Layout from "../components/pachalayout"
import PachaTopBar from "../components/pachaTopBar"
import Hero from "../components/heros/pachaHero"
import Reviews from "../components/pachaReviews"
import Treatments from "../components/pachaTreatments"
import Why from "../components/pachaWhy"
import Team from "../components/pachaTeam"
import Clinic from "../components/pachaClinicInfoGrid"
import FeaturedFaq from "../components/pachaFaq"
import Calander from "../components/calander"
import "../styles/pachaMamma.css"

export default function PachaMammaPage() {
  return (
    <div className="pacha-wrapper">
      <Layout>
        <PachaTopBar />
        <Hero />
        <Reviews />
        <Treatments />
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