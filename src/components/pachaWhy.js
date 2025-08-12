import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section, Container, Flex, GridAuto } from "./layoutComponents"

const Wrapper = styled.div`
  box-shadow: var(--shadow-light);
  padding: 1em;

  &:nth-child(even) {
    background: var(--clr-light-secondary);
  }
`

const Item = props => {
  return (
    <Wrapper className="spacing">
      <StaticImage src="../images/pachaCheck.svg" />
      <h3 className="bold caps">{props.title}</h3>
      <p>{props.text}</p>
    </Wrapper>
  )
}

export default function Why() {
  return (
    <Section>
      <Container className="spacing">
        <Flex>
          <h2 className="title--bold">
            what makes pacha mamma massage{" "}
            <span className="italics accent">different?</span>
          </h2>
          <p>
            We offer a truly unique massage that will transport you to an
            all-encompasing relaxation experience for both body and mind.
          </p>
        </Flex>
        <GridAuto>
          <Item
            title="sound vibration therapy"
            text="We all understand how good a relaxation massage can make us feel. Now, imagine floating on a cloud of music during that relaxation massage."
          />
          <Item
            title="retreat experience"
            text="Rather than stressfully navigating yourself downtown, enjoy a retreat-like experience in the rolling foothills."
          />
          <Item
            title="therapuetic relaxation"
            text="We help our clients achieve healing, improved movement, circulation, and a peaceful, relaxed body, mind, and soul with our Therapuetic Relaxation techniques."
          />
          <Item
            title="our location"
            text="Located on-site of Misty Ridge Retreat B&B, your relaxation experience starts the minute you enter our 6.5 acres of land!"
          />
          <Item
            title="the drive out"
            text="Enjoy the scenery and solitude during your drive out to our massage clinic located in the rolling foothills just outside of Calgary!"
          />
          <Item
            title="free parking"
            text="No need to stress yourself out searching for parking before your massage! Enjoy the ease of free parking."
          />
          <Item
            title="tailored treatments"
            text="We will ask you to fill out a questionnaire prior to your massage to come up with a tailored treatment plan to achieve a healed body, mind, and soul!"
          />
          <Item
            title="dedicated therapists"
            text="Our goal is to help you reach new meditation heights and transport you to an all-encompassing relaxation experience for both body and mind."
          />
          <Item
            title="health coverage"
            text="We offer health coverage plans to help you save costs so you can enjoy a deeper state of relaxation!"
          />
        </GridAuto>
      </Container>
    </Section>
  )
}
