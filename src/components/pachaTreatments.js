import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section, Container, GridAuto } from "./layoutComponents"
import { ButtonSecondary } from "./buttons"

const Text = styled.div`
  padding: 0 2em 3em;
`

const Item = styled.div`
  text-align: center;
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
`

export default function Treatments() {
  return (
    <Section>
      <Container className="spacing">
        <center>
          <p className="upper accent italics">
            surpassing your massage expectations
          </p>
          <h2 className="title--bold">
            tailored treatments to meet your needs
          </h2>
        </center>
        <GridAuto>
          <Item className="spacing">
            <StaticImage
              src="../images/pacha-massage-therapy-calgary.jpg"
              alt="massage and sound therapy calgary"
            />
            <Text className="spacing">
              <h3 className="body--large upper accent">
                massage & sound therapy
              </h3>
              <p>
                Combining skillful massage technique with sound therapy to leave
                you feeling tension free, relaxed, and revitalized.
              </p>

              <ButtonSecondary to="/treatments/massage-therapy-calgary">
                learn more
              </ButtonSecondary>
            </Text>
          </Item>
          <Item className="spacing">
            <StaticImage
              src="../images/pacha-craniosacral-massage-calgary.jpg"
              alt="craniosacral massage therapy calgary"
            />
            <Text className="spacing">
              <h3 className="body--large upper accent">craniosacral therapy</h3>
              <p>
                Using a gentle touch and manipulating the skull to release
                tension deep in the body and relieve pain and dysfunction while
                improving general health.
              </p>

              <ButtonSecondary to="/treatments/craniosacral-massage-calgary">
                learn more
              </ButtonSecondary>
            </Text>
          </Item>
          <Item className="spacing">
            <StaticImage
              src="../images/pacha-reiki-calgary-healing-session.jpg"
              alt="distance healing & reiki"
            />
            <Text className="spacing">
              <h3 className="body--large upper accent">
                distance healing & reiki
              </h3>
              <p>
                Helping you address and acknowledge areas of your body that are
                giving you issues to find a resolution for long-lasting or
                permanent healing.
              </p>

              <ButtonSecondary to="/treatments/reiki-calgary">
                learn more
              </ButtonSecondary>
            </Text>
          </Item>
          <Item className="spacing">
            <StaticImage
              src="../images/pacha-hot-stone-massage-calgary.jpg"
              alt="hot stone massage calgary"
            />
            <Text className="spacing">
              <h3 className="body--large upper accent">hot stone massage</h3>
              <p>
                Hot Stone Massage is an ancient treatment that offers heat to
                the muscles by way of a warmed smooth stone massaged into the
                area.
              </p>

              <ButtonSecondary to="/treatments/hot-stone-massage-calgary">
                learn more
              </ButtonSecondary>
            </Text>
          </Item>
        </GridAuto>
      </Container>
    </Section>
  )
}
