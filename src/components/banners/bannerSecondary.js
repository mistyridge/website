import React from "react"
import styled from "styled-components"
import { Actions, Container } from "../layoutComponents"
import { AnchorPrimary, ButtonPrimary } from "../buttons"
import Breadcrumb3Links from "../breadcrumbs/breadcrumb3links"
import BookBox from "../bookBox"
import InfoBanner from "../infoBanner"

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
`

const Bg = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / span 2;
  background: url("../../images/calgary-bed-and-breakfast.jpg")
    rgba(0, 0, 0, 0.7);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1000;
`

const Top = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  color: var(--txt-light);
  padding: 6em 0;

  p,
  h2 {
    max-width: 70ch;
  }
`

const Bottom = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 1;
  background: var(--clr-light);
  box-shadow: var(--shadow-light-accent);
  width: 85%;
  margin: 0 auto;
  max-width: 65rem;
`

// banner with only 2 links in the breadcrumb
export default function BannerSecondary(props) {
  return (
    <Wrapper>
      <Bg />
      <Top>
        <Container className="spacing">
          <div>
            <Breadcrumb3Links
              to1={props.to1}
              link1={props.link1}
              to2={props.to2}
              link2={props.link2}
              to3={props.to3}
              link3={props.link3}
            />
            <hr />
            <h2 className="title bold">{props.title}</h2>
          </div>
          <p className="body--small caps">{props.description}</p>
        </Container>
      </Top>
      <Bottom>
        <Actions>
          <AnchorPrimary
            href="https://checkout.lodgify.com/kathryn-kessler/en/?currency=CAD#/231709"
            target="_blank"
          >
            check availability
          </AnchorPrimary>
        </Actions>
      </Bottom>
    </Wrapper>
  )
}