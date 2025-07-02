import React from "react"
import styled from "styled-components"
import { Flex } from "./layoutComponents"
import HelpImg from "../images/help.svg"

const Wrapper = styled.div`
  background: var(--clr-accent);
  color: var(--txt-light);
  padding: 0.8em 1em;
  border-radius: 10px;

  img {
    width: 40px;
  }
`

export default function Help() {
  return (
    <Wrapper>
      <Flex>
        <img src={HelpImg} alt="help" />
        <div className="spacing-sm">
          <p className="caps bold">have any questions?</p>
          <p className="body--small upper">call us today (403) 805-8256</p>
        </div>
      </Flex>
    </Wrapper>
  )
}
