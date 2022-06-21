import React, { useState } from "react"
import styled from "styled-components"
import { Section, Container, Flex } from "../layoutComponents"
import { ButtonUnderline } from "../buttons"

import ArrowDown from "../../images/arrow-down.svg"

const device = {
  md: "48em",
}

const AccordionWrapper = styled.div`
  border-bottom: ${({ item }) =>
    item ? "none" : "1px solid var(--clr-accent)"};
`

const TitleFlex = styled.div`
  padding: var(--spacer-sm);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${({ item }) => (item ? "4px solid #9ecaed" : "none")};

  &:hover {
    cursor: pointer;
    background: var(--clr-light-secondary);
    transition: 0.25s ease-in;
  }
`

const Text = styled.div`
  align-self: start;
`

const AccordionContent = styled.div`
  display: ${({ item }) => (item ? "block" : "none")};
`

const ArrowImg = styled.img`
  width: 25px;
  transform: ${({ item }) => (item ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.25s;
`

const Spacer = styled.div`
  margin-bottom: var(--spacer);
`

const AccordionItem = props => {
  const [item, itemOpen] = useState(false)

  function toggleItem() {
    itemOpen(!item)
  }
  return (
    <AccordionWrapper item={item}>
      <TitleFlex item={item} onClick={toggleItem}>
        <p className="bold">{props.question}</p>
        <ArrowImg item={item} src={ArrowDown} alt="" />
      </TitleFlex>
      <AccordionContent className="spacing" item={item}>
        <div className="spacing">
          <p>{props.answer}</p>
        </div>
        <Spacer />
      </AccordionContent>
    </AccordionWrapper>
  )
}

export default function FeaturedFaq() {
  return (
    <Section>
      <Container className="spacing-lg">
        <Flex>
          <Text className="spacing">
            <h2 className="title italics accent caps bold">
              get your questions answered
            </h2>
          </Text>
          <div>
            <AccordionItem
              question="What are your Covid-19 protocols?"
              answer="Hand Sanitizer is located at the front door, kitchen, bathrooms and guest rooms. All guests are encouraged to use the hand sanitizer regularly.
              Breakfast, on request, can be brought to your guest room or served socially distant at the kitchen table.
              Rooms are thoroughly cleaned and sanitized between guest visits.
              Common areas, (entrance, main living areas and bathrooms), are frequently and thoroughly cleaned and sanitized with close attention to doorknobs, light switches and TV controls."
            />
            <AccordionItem
              question="What are your check in and check out times?"
              answer="Check in is at 4:00 PM on the day of your booking, and check out is at 11:00 AM on the last day of your booking."
            />
            <AccordionItem
              question="What are your payment policies?"
              answer="50% of payment is due at your time of booking, and your remaining balance is due 0 days before your arrival to our bed and breakfast. All paid prepayments are non-refundable."
            />
          </div>
        </Flex>
      </Container>
    </Section>
  )
}
