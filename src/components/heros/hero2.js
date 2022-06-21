import React from "react"
import styled from "styled-components"
import { Container, Flex, Actions } from "../layoutComponents"
import {
  AnchorPrimary,
  AnchorSecondary,
  ButtonPrimary,
  ButtonSecondaryDark,
} from "../buttons"
import BookBox from "../bookBox"

const device = {
  md: "43em",
}

const HeroWrapper = styled.div`
  background: url("../../images/calgary-bed-and-breakfast.jpg"),
    rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  place-items: center;
  padding: 7em 0 7em 0;
`

const Text = styled.div`
  color: var(--txt-light);
  text-align: center;
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
`

export default function Hero2() {
  return (
    <HeroWrapper>
      <Container className="spacing">
        <Text className="spacing">
          <h2 className="title">
            experience a magical b&b retreat in the beautiful rolling foothills
            of alberta
          </h2>
          <p>
            Enjoy a scrumptious breakfast with stunning scenery, walking trails,
            wildlife, outdoor gathering spaces, and more! Our unique 6.5 acre
            B&B is located just outside of Calgary where you'll get to
            experience panoramic city views while being nestled in the beautiful
            rolling foothills!
          </p>
        </Text>
        <Actions>
          <AnchorPrimary
            href="https://checkout.lodgify.com/kathryn-kessler/en/?currency=CAD#/231709"
            target="_blank"
          >
            check availability
          </AnchorPrimary>
        </Actions>
      </Container>
    </HeroWrapper>
  )
}
