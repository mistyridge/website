import React from "react"
import styled from "styled-components"
import { Section, Container, GridAuto } from "./layoutComponents"

const device = {
  md: "48em",
}
const List = styled.ul`
  margin-left: 0;
  padding-left: 0;
`

const Flex = styled.div`
  display: flex;
  img {
    /* width: 100%; */
  }
  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }
`

export default function HouseInfo() {
  return (
    <Section>
      <Container>
        <Flex>
          <div className="spacing">
            <h2 className="caps body--large bold">house rules</h2>
            <hr />
            <List>
              <li>Check in time: 4:00 PM</li>
              <li>Check-out time: 11:00 AM</li>
              <li>Credit cards are accepted</li>
              <li>Children are welcome</li>
              <li>Smoking is prohibited</li>
            </List>
          </div>
          <div className="spacing">
            <h2 className="caps body--large bold">policies and notes</h2>
            <hr />
            <List>
              <li>50% of payment is due at time of booking</li>
              <li>Remaining balance is due 0 days before arrival</li>
              <li>All payments are non-refundable</li>
            </List>
          </div>
        </Flex>
      </Container>
    </Section>
  )
}
