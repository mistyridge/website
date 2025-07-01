import React from "react"
import Layout from "../components/layout"
import PachaTopBar from "../components/pachaTopBar"

export default function PachaMammaPage() {
  return (
    <Layout>
      <PachaTopBar />
      <main style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h1>Pacha Mamma Massage & Sound Therapy</h1>
        {/* hero, services, contact form, etc. will go here */}
      </main>
    </Layout>
  )
}