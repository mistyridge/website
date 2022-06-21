import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  Section,
  Container,
  GridAuto,
  Flex,
  FlexColumn,
  Actions,
} from "./layoutComponents"
import { AnchorSecondary } from "./buttons"
import { FaWifi, FaCoffee, FaSpa, FaShower } from "react-icons/fa"

const device = {
  md: "48em",
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;

  @media screen and (max-width: 48em) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }
`

const FeatureWrapper = styled.div``

const TextWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  background: var(--clr-accent);
  color: var(--txt-light);
  padding: 2em 2em 2em 2em;

  @media screen and (max-width: 48em) {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
  }
`

const Text = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: 65rem;
`

const FeaturesList = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / -1;
  background: url("../images/a-truly-unique-breakfast.jpg"), rgba(0, 0, 0, 0.7);
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  padding: 2em 2em 2em 2em;
  color: var(--txt-light);

  @media screen and (max-width: 48em) {
    grid-row: 2 / 3;
    grid-column: 1 / -1;
  }
`

const Bottom = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  background: var(--clr-accent);
  color: var(--txt-light);

  padding: 2em 8em;

  @media screen and (max-width: 48em) {
    grid-row: 3 / -1;
    grid-column: 1 / -1;
  }
`

const FontStyle = {
  fontSize: "25px",
}

const Feature = props => {
  return (
    <FeatureWrapper className="">
      <p className="bold caps">&#x2192; {props.title}</p>
      <p className="body--small">{props.description}</p>
    </FeatureWrapper>
  )
}

export default function Features() {
  return (
    <Section>
      <Grid>
        <TextWrapper>
          <Text className="spacing">
            <h2 className="caps bold title">B&B Features</h2>
            <p>
              As our guests can agree, Misty Ridge Retreat Calgary bed and
              breakfast is designed for you to retreat from the hustle and
              bustle of your everyday life while immersed in the beautiful
              rolling foothills of Alberta. This unique six and half acre
              property offers 3 kilometres of walking trails in the summer
              months, and snow shoeing or cross country skiing trails for the
              winter months. Our spiritual retreat Alberta property is within
              the "dark sky" region where you can enjoy impressive viewings of
              constellations, satellites, Space Stations and on occasion, the
              Northern Lights. During the 10 day Calgary Stampede celebrations
              you will enjoy unobstructed views of the nightly firework display.
            </p>
            <Actions>
              <AnchorSecondary
                href="https://checkout.lodgify.com/kathryn-kessler/en/?currency=CAD#/231709"
                target="_blank"
              >
                book your stay
              </AnchorSecondary>
            </Actions>
          </Text>
        </TextWrapper>
        <FeaturesList>
          <Flex>
            <center className="spacing">
              <Feature
                title="3.5 km of walking trails"
                description="Veer off on your own into the beautiful rolling foothills for a quiet and relaxing walk in nature."
              />
              <Feature
                title="enchanted forest"
                description="Connect with nature and revitalize your spirit among the enchanted forest."
              />
              <Feature
                title="pool of rememberence"
                description="Disconnect from the outside world while cooling off and quietly reflecting on your thoughts."
              />
              <Feature
                title="15 outdoor firepits"
                description="Looking for a social or quiet campfire experience at nightfall? Enjoy one of our many outdoor firepits."
              />
            </center>
            <center className="spacing">
              <Feature
                title="garden igloos"
                description="A unique way to peacefully immerse yourself among the wildlife."
              />
              <Feature
                title="massage therapy"
                description="Enjoy our on-site massage and sound therapy with Pacha Mamma Massage!"
              />
              <Feature
                title="dark sky country"
                description="Away from the light pollution, enjoy a stunning view of the milky way galaxy."
              />
              <Feature
                title="heated floors"
                description="Joining us in the winter months? Stay warm and cozy with our heated flooring systems!"
              />
            </center>
          </Flex>
        </FeaturesList>
        <Bottom>
          <GridAuto>
            <FlexColumn>
              {" "}
              <FaWifi style={FontStyle} /> <p className="caps">free wifi</p>
            </FlexColumn>
            <FlexColumn>
              {" "}
              <FaCoffee style={FontStyle} />{" "}
              <p className="caps">breakfast included</p>
            </FlexColumn>
            <FlexColumn>
              {" "}
              <FaSpa style={FontStyle} />{" "}
              <p className="caps">hot tub, spa, pool</p>
            </FlexColumn>
            <FlexColumn>
              {" "}
              <FaShower style={FontStyle} />{" "}
              <p className="caps">private shower & tubs</p>
            </FlexColumn>
          </GridAuto>
        </Bottom>
      </Grid>
    </Section>
  )
}
