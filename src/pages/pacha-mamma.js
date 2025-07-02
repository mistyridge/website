import React from "react"
import Layout from "../components/pachalayout"
import PachaTopBar from "../components/pachaTopBar"
import Hero from "../components/heros/pachaHero"
import Reviews from "../components/pachaReviews"
import Treatments from "../components/pachaTreatments"
import Why from "../components/pachaWhy"
import Team from "../components/pachaTeam"

export default function PachaMammaPage() {
  return (
    <Layout>
      <PachaTopBar />
      <Hero />
      <Reviews />
      <Treatments />
      <Why />
      <Team />
    </Layout>
  )
}