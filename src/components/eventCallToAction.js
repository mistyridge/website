import React from "react"
import styled from "styled-components"
import { ButtonSecondary, ButtonSecondaryLight } from "./buttons"
import { Actions, Container, Flex } from "./layoutComponents"
import BookBox from "./bookBox"

const Wrapper = styled.div`
  background: ${props => `url(${props.img})`}, rgba(255, 89, 17, 1);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  padding: 8em 0;
`

const Text = styled.div`
  color: var(--txt-light);
`

export default function EventCallToAction(props) {
  return (
    <Wrapper img={props.img}>
      <Container className="spacing">
        <Text>
          <Flex>
            <h2 className="title bold upper">{props.title}</h2>
            <p>{props.description}</p>
          </Flex>
        </Text>
        <Actions>
          <ButtonSecondaryLight to="/contact">
            {props.button}
          </ButtonSecondaryLight>
        </Actions>
      </Container>
    </Wrapper>
  )
}
