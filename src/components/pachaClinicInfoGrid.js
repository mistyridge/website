import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridThree } from "./layoutComponents"
import { AnchorUnderline, ButtonUnderline } from "./buttons"

const Item = styled.div`
  background: var(--clr-light-secondary);
  box-shadow: var(--shadow-bottom);
  padding: 2em 2em;
`

const Flex = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 2px;
  }
`

// Add this styled component for purple icons
const PurpleIcon = styled.div`
  img {
    filter: invert(0%) sepia(100%) saturate(7500%) hue-rotate(270deg) brightness(0.55) contrast(1.2);
    width: 25px;
    height: 25px;
  }
`

export default function Clinic() {
  return (
    <Section>
      <Container>
        <div>
          <GridThree>
            <Item>
              <Flex>
                <PurpleIcon>
                  <StaticImage
                    src="../images/location.svg"
                    alt="massage clinic location"
                  />
                </PurpleIcon>
                <p className="caps bold">location</p>
              </Flex>
              <p className="body--small">
                Enjoy a relaxing drive through the rolling foothills to 112196 226
                Ave W, Foothills, AB.
              </p>
              <AnchorUnderline
                href="https://www.google.com/maps/dir//pacha+mamma+massage/@50.8642587,-114.2229039,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5371a05b09851601:0x33c645a0686ae67a!2m2!1d-114.1811013!2d50.8120469"
                target="_blank"
              >
                get directions
              </AnchorUnderline>
            </Item>
            <Item>
              <Flex>
                <PurpleIcon>
                  <StaticImage src="../images/hours.svg" alt="massage clinic hours" />
                </PurpleIcon>
                <p className="caps bold">hours</p>
              </Flex>
              <p className="body--small">
                Open for appointments Wednesday, Thursday, Friday from 1 PM - 6 PM,
                or contact us anytime!
              </p>
              <ButtonUnderline to="/book-an-appointment">
                book online
              </ButtonUnderline>
            </Item>
            <Item>
              <Flex>
                <PurpleIcon>
                  <StaticImage
                    src="../images/phone.svg"
                    alt="massage clinic contact"
                  />
                </PurpleIcon>
                <p className="caps bold">contact</p>
              </Flex>
              <p className="body--small">
                Call us at (403) 805-8256 with questions or booking requests.
              </p>
              <AnchorUnderline href="tel: 403-805-8256">call us</AnchorUnderline>
            </Item>
          </GridThree>
        </div>
       </Container>
    </Section> 
  )
}
