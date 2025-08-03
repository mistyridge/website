import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section, Container } from "./layoutComponents"
import { ButtonSecondaryLight } from "./buttons"

const Wrapper = styled.div`
  background: url("../../images/cta.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4em 0;
  color: var(--txt-light);
`

const ScrollButton = styled.button`
  background: transparent;
  color: var(--clr-light-secondary);
  border: 2px solid var(--clr-light-secondary);
  padding: 1em 2em;
  border-radius: var(--br);
  cursor: pointer;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    color: var(--clr-light-secondary);
  }
`

export default function Interrupt() {
  const scrollToCalendar = () => {
    const calendarElement = document.getElementById("calendar")
    if (calendarElement) {
      calendarElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Wrapper>
      <Container className="spacing">
        <h2 className="title bold italics">
          book your healing session with us
        </h2>
        <p>
          Enjoy an all-encompassing relaxation experience as we combine our
          skillful massage technique with sound therapy to leave you feeling
          tension-free, relaxed, and revitalized.
        </p>
        <ScrollButton onClick={scrollToCalendar}>
          book your healing session
        </ScrollButton>
      </Container>
    </Wrapper>
  )
}
