import React from "react"
import Layout from "../components/pachalayout"
import PachaTopBar from "../components/pachaTopBar"
import Hero from "../components/heros/pachaHero"

export default function PachaMammaPage() {
  return (
    <Layout>
      <PachaTopBar />
      <Hero />
    </Layout>
  )
}