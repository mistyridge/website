import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container, GridThree } from "./layoutComponents"
import { AnchorSecondary, ButtonSecondaryLight } from "./buttons"

const Wrapper = styled.div`
  padding: 2em 0;
  background: var(--clr-accent);
  color: var(--txt-light);
`

const Item = styled.div`
  padding: 2em;
`

export default function InfoBanner() {
  return (
    <Wrapper>
      <Container>
        <GridThree>
          <Item className="spacing">
            <StaticImage
              src="../images/location.svg"
              alt=" calgary bed and breakfast location"
              width={40}
            />
            <h3 className="body--large">location</h3>
            <p>
              Located in Calgary's rolling foothills at 112196 226 Ave W, AB.
            </p>
            <AnchorSecondary
              href="https://www.google.com/maps/dir//misty+ridge+retreat/@50.8538226,-114.1909013,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5371a19378bfc117:0x4b1d3734f8cbca7a!2m2!1d-114.1811073!2d50.8121791"
              target="_blank"
            >
              get directions
            </AnchorSecondary>
          </Item>
          <Item className="spacing">
            <StaticImage
              src="../images/house.svg"
              alt="calgary bed and breakfast rates"
              width={40}
            />
            <h3 className="body--large">rates</h3>
            <p>We offer 4 unique rooms at $129 daily, or $812 weekly.</p>
            <AnchorSecondary
              href="https://checkout.lodgify.com/kathryn-kessler/en/?currency=CAD#/231709"
              target="_blank"
            >
              availability
            </AnchorSecondary>
          </Item>
          <Item className="spacing">
            <StaticImage
              src="../images/phone.svg"
              alt="calgary bed and breakfast contact"
              width={40}
            />
            <h3 className="body--large">contact</h3>
            <p>
              Call us directly at (403) 805-8256, or email us using our contact
              form.
            </p>
            <ButtonSecondaryLight to="/contact">
              get in touch
            </ButtonSecondaryLight>
          </Item>
        </GridThree>
      </Container>
    </Wrapper>
  )
}
