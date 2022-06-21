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
        <p className="">{props.question}</p>
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
          <div>
            <AccordionItem
              question="How will massage therapy benefit me?"
              answer="With professional massage therapy you can experience relief from muscular tension and pain, receive increased range of motion and a reduction of mental stress levels. Massage is a natural healing process that can deliver both physical and emotional benefits. Treatments are specifically tailored to meet your needs."
            />
            <AccordionItem
              question="How often will I need treatments?"
              answer="Your body can let you know. Some people require only a few sessions to treat a specific problem, while others become regular users of massage therapy as both proactive and preventative healthcare. Massage can help maintain good muscle tone, flexibility, and help correct muscular injuries.

"
            />
            <AccordionItem
              question="Will I experience muscle soreness following a massage therapy treatment?"
              answer="Most people report feel very relaxed, and often experience significant relief from aches, pains and stress after a massage session. However some people, especially those who require deep-tissue massage, experience mild muscle soreness which may last a day or two. Once the soreness is gone, they often notice heightened energy levels and an increased range of motion."
            />
          </div>
          <div>
            <AccordionItem
              question="How will massage therapy benefit me?"
              answer="With professional massage therapy you can experience relief from muscular tension and pain, receive increased range of motion and a reduction of mental stress levels. Massage is a natural healing process that can deliver both physical and emotional benefits. Treatments are specifically tailored to meet your needs."
            />
            <AccordionItem
              question="How often will I need treatments?"
              answer="Your body can let you know. Some people require only a few sessions to treat a specific problem, while others become regular users of massage therapy as both proactive and preventative healthcare. Massage can help maintain good muscle tone, flexibility, and help correct muscular injuries.

"
            />
            <AccordionItem
              question="Will I experience muscle soreness following a massage therapy treatment?"
              answer="Most people report feel very relaxed, and often experience significant relief from aches, pains and stress after a massage session. However some people, especially those who require deep-tissue massage, experience mild muscle soreness which may last a day or two. Once the soreness is gone, they often notice heightened energy levels and an increased range of motion."
            />
          </div>
        </Flex>
      </Container>
    </Section>
  )
}
