import React from "react"
import styled from "styled-components"
import { Container, Flex, Actions } from "../layoutComponents"
import {
  AnchorPrimary,
  AnchorSecondary,
  ButtonPrimary,
  ButtonSecondaryDark,
  ButtonSecondaryLight,
} from "../buttons"
import BookBox from "../bookBox"

const device = {
  md: "43em",
}

const HeroWrapper = styled.div`
  background: url("../../images/hero.jpg"), rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 85vh;
  display: flex;
  align-items: center;
`

const Text = styled.div`
  color: var(--txt-light);
  max-width: 70ch;
`

const ButtonWrapper = styled.div`
  display: flex;

  & > * + * {
    margin-left: 10px;
  }

  @media screen and (max-width: 37.5em) {
    flex-direction: column;
    text-align: center;
    & > * {
      width: 100%;
    }

    & > * + * {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }
`

export default function HeroBasic() {
  return (
    <HeroWrapper>
      <Container className="spacing">
        <Text className="spacing">
          <h1 className="title bold">
            experience a magical b&b retreat in the beautiful rolling foothills
            of alberta
          </h1>
          <p>Escape to tranquility and reconnect with nature at our serene bed & breakfast. Nestled in the heart of Alberta's rolling foothills, our retreat offers breathtaking views, personalized service, and unforgettable experiences for those seeking relaxation and rejuvenation.</p>
        </Text>
        <ButtonWrapper>
          <ButtonSecondaryLight to="/reviews">
            guest experiences
          </ButtonSecondaryLight>
          <AnchorPrimary
            href="https://checkout.lodgify.com/kathryn-kessler/en/?currency=CAD#/231709"
            target="_blank"
          >
            check availability &#8594;
          </AnchorPrimary>
        </ButtonWrapper>
      </Container>
    </HeroWrapper>
  )
}
