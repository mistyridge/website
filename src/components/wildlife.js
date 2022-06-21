import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import React from "react"
import { Section, Container } from "./layoutComponents"

const GridAuto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));

  & > * {
    justify-self: center;
    align-self: center;
  }
`

const ImgStyle = {
  height: "100%",
}

export default function Wildlife() {
  return (
    <Section className="spacing">
      <Container className="spacing">
        <center>
          <h2 className="title caps bold accent">
            experience the wildlife of the rolling foothills
          </h2>
          <p>
            Start or end your perfect day on our 6.5 acres of land to the view
            of abudant wildlife including elk, deer, birds, wolves and more!
          </p>
        </center>
      </Container>
      <GridAuto>
        <StaticImage
          src="../images/blue-bird.jpg"
          alt="calgary b&b wildlife"
          style={ImgStyle}
        />
        <StaticImage
          src="../images/three-gooslings.jpg"
          alt="calgary b&b wildlife"
          style={ImgStyle}
        />
        <StaticImage
          src="../images/eagle.jpg"
          alt="calgary b&b wildlife"
          style={ImgStyle}
        />
        <StaticImage
          src="../images/moose.jpg"
          alt="calgary b&b wildlife"
          style={ImgStyle}
        />
      </GridAuto>
      <p className="center italics bold">
        * Photos were taken in the backyard of Misty Ridge Retreat
      </p>
    </Section>
  )
}
