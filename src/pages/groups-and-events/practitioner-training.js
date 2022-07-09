import React from "react"
import styled from "styled-components"
import SEO from "../../components/seo"
import BannerSecondary from "../../components/banners/bannerSecondary"
import EventCallToAction from "../../components/eventCallToAction"
import Experience from "../../components/experience"
import InfoBanner from "../../components/infoBanner"
import Layout from "../../components/layout"
import Wildlife from "../../components/wildlife"
import Features from "../../components/features"
import Breakfast from "../../components/breakfast"
import Map from "../../components/map"
import More from "../../components/more"
import Rooms from "../../components/rooms"
import Review from "../../components/review"
import {
  GridTwo,
  GridAuto,
  Flex,
  Section,
  Container,
} from "../../components/layoutComponents"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorInline, ButtonInline } from "../../components/buttons"

import CtaImg from "../../images/weddings/land-for-wedding.jpeg"

const GridItem = styled.div`
  box-shadow: var(--shadow-light);
  padding: 2em;
`

const ImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
`

export default function PractitionerTraining() {
  return (
    <Layout>
      <SEO
        title="Practitioner Training Workshop"
        description="Looking for a new idea for an online business? Are you
                interested in Astrology, Numerology & Tarotology? Ologies to
                Archetypes Practitioner Training incorporates all the “ologies”
                and offers a profound, deep connection to the Archetypes. Which
                in turn allows the practitioner and/or client to change their
                life path."
      />
      <Section>
        <Container className="spacing">
          <Flex>
            <div className="spacing">
              <h1 className="title bold caps accent italics">
                Practitioner training workshop
              </h1>
              <p>
                Looking for a new idea for an online business? Are you
                interested in Astrology, Numerology & Tarotology? Ologies to
                Archetypes Practitioner Training incorporates all the “ologies”
                and offers a profound, deep connection to the Archetypes. Which
                in turn allows the practitioner and/or client to change their
                life path.
              </p>
              <p>
                Use{" "}
                <AnchorInline
                  href="https://shoutout.wix.com/so/68O5FbOS6?languageTag=en&cid=84b152ff-0ac2-4253-b243-6dd5e4465e13&fbclid=IwAR0q7tEND4ox4DOAJxMZ6C60SsGMGxRO3KYpCI1zPgHbd7IjsVX17FeWx2c#/main"
                  target="_blank"
                >
                  this link
                </AnchorInline>{" "}
                to find out more about this event!
              </p>
              <p>
                Please feel free to{" "}
                <ButtonInline to="/contact">contact us</ButtonInline> if you
                have any questions.
              </p>
            </div>
            <StaticImage src="../images/event-1.jpg" alt="event" />
          </Flex>
        </Container>
      </Section>
    </Layout>
  )
}
