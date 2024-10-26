import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section, Container, Flex, GridAuto } from "./layoutComponents"
import { ButtonSecondaryLight } from "./buttons"

const Wrapper = styled.div`
  background: var(--clr-accent);
  color: var(--txt-light);
`

const Activity = styled.div`
  border-radius: var(--br);
  background: var(--clr-light);
  color: var(--txt-dark);

  div {
    padding: 2em;
  }
`

export default function More() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Flex>
            <div className="spacing">
              <h2 className="heading upper bold">more things to do</h2>
              <p>
                You won't run out of things to do on our 6.5 acres of land here
                in the rolling foothills! There are plenty of great nearby spots
                to get in some bird watching, or you can even stay out late at
                night in our gazebo deck to watch the passing by nature at
                night!
              </p>
              <ButtonSecondaryLight to="/gallery">
                view full gallery
              </ButtonSecondaryLight>
            </div>
            <Activity className="spacing">
              <StaticImage
                src="../images/blue-bird.jpg"
                alt="calgary b&b bird watching"
              />
              <div className="spacing">
                <p className="bold upper body--large">bird watching</p>
                <p>
                  Whether you're sitting on the deck, walking through the nearby
                  trails, or relaxing in bed, you will be able to watch many
                  different species of birds!
                </p>
              </div>
            </Activity>
            <Activity className="spacing">
              <StaticImage
                src="../images/immersed-in-nature-at-night-calgary-bb.jpg"
                alt="immersed in nature at calgary bed and breakfast"
              />
              <div className="spacing">
                <p className="bold upper body--large">
                  immerse yourself in nature at night
                </p>
                <p>
                  We have built gazebo decks for your pleasure! Peacefully
                  immerse yourself in nature at night at you'll see wolves,
                  coyotes, owls, and more!
                </p>
              </div>
            </Activity>
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  )
}
