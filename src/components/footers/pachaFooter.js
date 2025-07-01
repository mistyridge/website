import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Info } from "../info"
import { Container } from "../layoutComponents"
import { ButtonInline } from "../buttons"

import Logo from "../../images/pachalogo.svg"
import AaronTonnerWebSolutionsLogo from "../../images/aaron-tonner-web-solutions-logo.svg"
import Facebook from "../../images/socials/facebook.svg"
import Instagram from "../../images/socials/instagram.svg"
import Twitter from "../../images/socials/twitter.svg"
import Linkedin from "../../images/socials/linkedin.svg"
import Youtube from "../../images/socials/youtube.svg"

const device = {
  sm: "43em",
  md: "48em",
  lg: "57em",
}

const FooterWrapper = styled.footer`
  padding: 4em 0 1em 0;
  background: var(--clr-light-secondary);
  color: var(--txt-dark);
`

export const Flex = styled.div`
  display: flex;
  img {
    width: 100%;
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

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 500px;
  }
`

const Socials = styled.div`
  display: flex;

  & > * + * {
    margin-left: 15px;
  }

  div {
    display: flex;

    & > * + * {
      margin-left: 5px;
    }
  }

  img {
    width: 25px;
  }
`

const FlexContact = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 5px;
  }

  a {
    color: var(--clr-accent);
    text-decoration: none;
  }

  p {
    margin-bottom: 0;
  }
`

const FlexItem = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    margin: var(--spacer) 0;

    li {
      a {
        color: var(--txt-dark);
        font-weight: var(--fw-500);
      }
    }
  }
`

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;

  @media screen and (max-width: ${device.lg}) {
    flex-direction: column;
    align-items: flex-start;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;

    @media screen and (max-width: ${device.md}) {
      flex-direction: column;
    }

    & > * + * {
      margin-left: 1em;

      @media screen and (max-width: ${device.md}) {
        margin-left: 0;
      }
    }

    li {
      a {
        text-transform: capitalize;
        color: var(--txt-dark);
        font-weight: var(--fw-500);
      }
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-transform: capitalize;
  color: var(--txt-dark);
  font-weight: var(--fw-400);

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.7;
  }
`

const Author = styled.div`
  color: var(--txt-dark-secondary);

  div {
    display: flex;
    gap: 0.5em;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
  }

  a {
    display: inline;
    color: var(--txt-dark-secondary);
  }

  img {
    width: 250px;
  }
`

export default function Footer() {
  return (
    <div className="spacing-lg">
      <FooterWrapper className="spacing">
        <Container className="spacing-lg">
          <LogoContainer>
            <img src={Logo} alt="" />
          </LogoContainer>
          <hr />
          <Flex>
            <FlexItem>
              <p className="heading">contact us</p>
              <ul>
                <li>
                  <FlexContact>
                    <a href="tel: 403-874-3131">{Info.tel1}</a>
                  </FlexContact>
                </li>
                <li>
                  <FlexContact>
                    <a href="mailto: info@3drtinc.com">{Info.mail1}</a>
                  </FlexContact>
                </li>
                <li>
                  <FlexContact>
                    <p>{Info.hours}</p>
                  </FlexContact>
                </li>
              </ul>
              <ul>
                <li>{Info.street1}</li>
                <li>{Info.city1}</li>
                <li>Canada</li>
              </ul>
              <Socials>
                <div>
                  <a
                    target="black"
                    href="https://www.facebook.com/pachamammamassage/?ref=page_internal/"
                  >
                    <img
                      src={Facebook}
                      alt="Pacha Mamma Massage & Sound Therapy - massage and sound therapy calgary"
                    />
                  </a>
                  <a
                    target="blank"
                    href="https://ca.linkedin.com/in/pachamamma"
                  >
                    <img
                      src={Linkedin}
                      alt="Pacha Mamma Massage & Sound Therapy - massage and sound therapy calgary"
                    />
                  </a>
                </div>
              </Socials>
            </FlexItem>
            <FlexItem className="spacing">
              <p className="heading">about us</p>
              <p>
                We are registered massage therapists based in Calgary, located
                at the Misty Ridge Retreat B&B. We understand that regular
                massage helps the body to relax and improve circulation
                resulting in the body going through a natural healing process.
                We specialize in combining therapeutic relaxation massage with
                sound therapy, craniosacral massage therapy, and distance
                healing & reiki. You can easily book your appointment on our
                online calander here.
              </p>
            </FlexItem>
          </Flex>
          <hr />
          <Copyright>
            <ul>
              <li>Copyright&#169; 2023</li>
              <li>{Info.name}</li>
              <li>All Rights Reserved</li>
              <li>
                <a
                  target="blank"
                  href="https://www.bookwithkathryn.com/terms-of-use"
                >
                  Terms of use
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://www.bookwithkathryn.com/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Copyright>
          <hr />
        </Container>
        <Author>
          <Container>
            <div>
              <p>website by: </p>
              <a target="blank" href="https://www.aarontonner.com">
                <img src={AaronTonnerWebSolutionsLogo} alt="" />
              </a>
            </div>
          </Container>
        </Author>
      </FooterWrapper>
    </div>
  )
}
