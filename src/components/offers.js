import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Section, Flex } from "./layoutComponents"
import { ButtonPrimary } from "./buttons"

const Offer = styled.div`
  box-shadow: var(--shadow-light-accent);
`
const Text = styled.div`
  padding: 2em 2em 2em 0;

  @media screen and (max-width: 48em) {
    padding-left: 2em;
  }
`

const Review = styled.div``

export default function Offers() {
  return (
    <Section>
      <Container className="spacing">
        <h1 className="title accent bold caps">special offers for groups & events</h1>
        <div className="spacing">
          <Offer>
            <Flex>
              <StaticImage
                src="../images/weddings/calgary-bed-and-breakfast-wedding.jpg"
                alt="bed and breakfast in calgary being used for small wedding"
                className="stretch"
              />
              <Text className="spacing">
                <h3 className="heading bold caps">weddings</h3>
                <Review>
                  <p className="italics">
                    "Misty Ridge was the perfect venue for our small wedding!
                    Allen and Kathryn were gracious hosts who made every effort
                    to make our family feel at home and create the right vibe
                    for our special day. The venue features very comfortable
                    themed rooms (nice beds!), spa-like bathrooms, absolutely
                    stunning scenery and walking trails, an abundance of outdoor
                    gathering spaces, and the truly magical “Turtle Hill” where
                    our ceremony was held." <br /> ~ Luke Rosewood
                  </p>
                </Review>
                <ButtonPrimary to="/groups-and-events/weddings">
                  learn more
                </ButtonPrimary>
              </Text>
            </Flex>
          </Offer>
          <Offer>
            <Flex>
              <StaticImage
                src="../images/yoga/calgary-bed-and-breakfast-yoga-retreat.jpg"
                alt="bed and breakfast in calgary being used for yoga retreat"
                className="stretch"
              />
              <Text className="spacing">
                <h3 className="heading bold caps">yoga retreats</h3>
                <Review>
                  <p className="italics">
                    "I recently led a retreat for 14 womxn at the Misty Ridge
                    Retreat B & B. The beautiful outdoor scenery and the space
                    they created for our yoga Practices were perfect for our
                    group. Kathryn provided delicious morning meals that
                    accommodated our various food allergies and it was evident
                    that much care had gone into insuring that our retreat was a
                    safe and positive experience. The on-site accommodation is
                    comfortable, clean and beautiful and being in close
                    proximity to Calgary, we were able to have students commute
                    in to the retreat as well. This was a perfect setting, well
                    enough removed from the city to properly relax but we'll
                    within reach of everything we needed! Highly recommend and
                    already booking for next year!" <br /> ~ Mandorla Yoga
                    Institute
                  </p>
                </Review>
                <ButtonPrimary to="/groups-and-events/yoga-retreats">
                  learn more
                </ButtonPrimary>
              </Text>
            </Flex>
          </Offer>
        </div>
      </Container>
    </Section>
  )
}
