import React from "react"
import styled from "styled-components"
import { Container, Flex, Actions } from "../layoutComponents"
import { ButtonPrimary, ButtonSecondaryDark } from "../buttons"
import { BsArrowRight } from "react-icons/bs"

const device = {
  md: "43em",
}

const HeroWrapper = styled.div`
  background: url("../../images/pachahero-1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 85vh;
  height: 100%;

  display: flex;
  align-items: center;

  @media screen and (max-width: 26em) {
    min-height: 100vh;
    height: 100%;
  }
`

const Text = styled.div`
  background: rgba(255, 255, 255, 0.75);
  padding: 2em 1em;
  color: var(--txt-dark);
  border-left: 3px solid var(--clr-accent);
  max-width: 70ch;
  width: 100%;
`

export default function HeroBasic() {
  return (
    <HeroWrapper>
      <Container>
        <Text className="spacing">
          <p className="accent italics upper">
            taking you to new meditation heights
          </p>
          <h2 className="title">
            get transported to an all-encompassing relaxation experience for
            both body and mind
          </h2>
          <p>
            Elevate your massage with our unique sound vibration therapy and
            enjoy a truly relaxing experience on the drive out to our location
            through the beautiful rolling foothills.{" "}
          </p>
          <ButtonPrimary to="/book-an-appointment">
            book your massage
          </ButtonPrimary>
        </Text>
      </Container>
    </HeroWrapper>
  )
}
