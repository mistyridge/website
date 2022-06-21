import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container, Section, Flex } from "./layoutComponents"
import { AnchorInline } from "./buttons"

const HostCard = styled.div`
  position: relative;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
  grid-gap: 1em;

  .host-img {
    height: 100%;
  }
`

const Name = styled.p`
  position: absolute;
  bottom: 0;
  padding: 1em 2em;
  background: rgba(0, 0, 0, 0.7);
  color: var(--txt-light);
  width: 100%;
`

const P = styled.p`
  max-width: 70ch;
  margin: 0 auto;
`

export default function Bio() {
  return (
    <Section>
      <Container className="spacing">
        <h2 className="title bold caps accent center">meet your hosts</h2>
        <Grid>
          <HostCard className="spacing">
            <StaticImage
              className="host-img"
              src="../images/kathryn-kessler-1.jpg"
              alt="kathryn kessler headshot"
            />
            <Name className="body--large  caps">kathryn kessler</Name>
          </HostCard>
          <HostCard className="spacing">
            <StaticImage
              className="host-img"
              src="../images/allen-kessler.jpg"
              alt="allen kessler headshot"
            />
            <Name className="body--large  caps">allen kessler</Name>
          </HostCard>
        </Grid>
        <P className="center">
          Did you know that Kathryn is the owner and operator of{" "}
          <AnchorInline href="https://www.bookwithkathryn.com" target="_blank">
            Pacha Mamma Massage & Sound Therapy
          </AnchorInline>
          , which is located on-site of the B&B? She has been practicing as a
          Registered Massage Therapist for nearly 30 years now, don't forget to
          book in with her for a true relaxation experience! <br />
        </P>
        <P className="center">
          Did you know that Allen creates his own steak spice mix, and collects
          honey directly on-site of the B&B! You won't want to miss out on the
          ultimate breakfast and dining experience
        </P>
        <div>
          <Flex>
            <StaticImage src="../images/allen-honey-making.jpg" />
            <StaticImage src="../images/honey-mix.jpg" />
          </Flex>
          <p className="bold italics center ">
            * Honey collected from the Misty Ridge Retreat B&B honey bee farm!
          </p>
        </div>
      </Container>
    </Section>
  )
}
