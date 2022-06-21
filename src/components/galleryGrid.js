import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import React from "react"
import { Container, GridTwo, Section } from "./layoutComponents"

const device = {
  md: "48em",
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: ${device.md}) {
    grid-template-columns: 1fr;
  }
`

export default function GalleryGrid() {
  return (
    <Section>
      <Container className="">
        <div className="spacing">
          <h1 className="title bold accent center">
            our bed and breakfast gallery
          </h1>
          <StaticImage src="../images/bed-and-breakfast-calgary.jpeg" />
        </div>
        <Grid>
          <StaticImage src="../images/front.jpg" />
          <StaticImage src="../images/stunning-bb-scenery.jpeg" />
          <StaticImage src="../images/bed-and-breakfast-calgary-2.jpeg" />
          <StaticImage src="../images/bed-and-breakfast-calgary-3.jpeg" />
          <StaticImage src="../images/bed-and-breakfast-calgary-4.jpeg" />
          <StaticImage src="../images/walking-trails-all-calgary-bb.jpeg" />
          <StaticImage src="../images/a-truly-unique-breakfast.jpg" alt="" />
          <StaticImage src="../images/blue-bird.jpg" alt="" />
          <StaticImage src="../images/eagle.jpg" alt="" />
          <StaticImage src="../images/moose.jpg" alt="" />
          <StaticImage src="../images/three-gooslings.jpg" alt="" />
          <StaticImage src="../images/immersed-in-nature-at-night.jpg" alt="" />
          <StaticImage
            src="../images/food/fresh-breakfast-calgary-bb-1.jpeg"
            alt=""
          />
          <StaticImage src="../images/turtle-hill.jpeg" alt="" />
          <StaticImage src="../images/pond.jpeg" alt="" />
        </Grid>
      </Container>
    </Section>
  )
}
