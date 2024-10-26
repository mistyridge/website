import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { Container } from "../layoutComponents"
import { FaAngleDown } from "react-icons/fa"

import Logo from "../../images/logo.png"

const device = {
  sm: "18em",
  md: "56em",
}

const Header = styled.header`
  background: rgba(255, 255, 255);
  border-bottom: 1px solid var(--clr-accent);
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: top 0.5s ease-out;
`

const Headertop = styled.div`
  padding: 1em 0;
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style-type: none;

    & > * + * {
      margin-left: 1.5em;
    }
  }
`

const NavPhone = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  color: var(--txt-dark);
  letter-spacing: 0.1em;
  transition: all 0.25s linear;

  // aligning text with icon
  display: flex;
  align-items: center;
  gap: 2px;

  :hover,
  :focus {
    opacity: 0.7;
  }
`

const Headerbottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
`

const LogoContainer = styled.div`
  img {
    height: 50px;
    transition: 0.4s;

    &[data-active="true"] {
      height: 90px;
    }
  }
`

const Nav = styled.nav`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;

  & > * + * {
    margin-left: 1.5em;
  }

  @media screen and (max-width: ${device.md}) {
    display: ${({ nav }) => (nav ? "flex" : "none")};
    align-items: center;
    position: absolute;
    top: 146.4px;

    left: 0;
    right: 0;
    flex-direction: column;
    width: 100%;
    background: var(--clr-light);
    box-shadow: var(--shadow-bottom);
    border-radius: var(--br);
    border-top: 1px solid var(--txt-dark-secondary);
    padding: 1em 2em 2em;

    & > * + * {
      margin-left: 0;
      margin-top: 15px;
    }
  }
`

const GetQuote = styled.a`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.25s linear;
  color: var(--txt-light);
  border: 1px solid var(--clr-accent);
  background: var(--clr-accent);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;

  &:hover {
    border: 1px solid var(--clr-accent-darker);
    background: var(--clr-accent-darker);
  }

  @media screen and (max-width: 32.5em) {
    display: none;
  }
`
const GetQuoteMobile = styled.a`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.25s linear;
  color: var(--txt-light);
  border: 1px solid var(--clr-accent);
  background: var(--clr-accent);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;

  &:hover {
    border: 1px solid var(--clr-accent-darker);
    background: var(--clr-accent-darker);
  }

  @media screen and (min-width: 32.5em) {
    display: none;
  }
`

const Dropdown = styled.li`
  /* hover display only on desktop */
  @media screen and (min-width: ${device.md}) {
    ul {
      position: absolute;
      z-index: 1000;
      display: none;
      opacity: 1;
      margin: 0;
      padding: 2em 2em 2em 1em;
      list-style-type: none;
      background: var(--clr-dark);

      li {
        a {
          color: var(--txt-light);
        }
      }
    }

    &:hover {
      ul {
        display: flex;
        flex-direction: column;
      }
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  color: var(--txt-dark);
  letter-spacing: 0.1em;
  transition: all 0.25s linear;

  // aligning text with icon
  display: flex;
  align-items: center;
  gap: 2px;

  :hover,
  :focus {
    opacity: 0.7;
  }

  @media screen and (max-width: ${device.md}) {
    font-size: var(--fs-b);
  }
`

const Burger = styled.div`
  display: none;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: var(--clr-accent);

    :nth-child(1) {
      transform: ${({ nav }) =>
        nav ? "rotate(-45deg) translate(-6px, 5px)" : ""};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "")};
    }
    :nth-child(3) {
      transform: ${({ nav }) =>
        nav ? "rotate(45deg) translate(-6px, -5px)" : ""};
    }
  }

  @media screen and (max-width: ${device.md}) {
    transform: scale(1);
    display: block;
    z-index: 10000;
  }
`

export default function HeaderBasic({ blogs , events }) {
  const [nav, navOpen] = useState(false)
  const [scrolled, setScrolled] = useState(true)

  console.log(events , blogs, "cvsdv")

  const blogData = blogs || [];
  const eventData = events || [];

  function toggleMenu() {
    navOpen(!nav)
  }

  return (
    <div>
      <Header>
        <Container>
          <Headertop>
            <LogoContainer>
              <Link to="/">
                <img src={Logo} alt="misty ridge retreatlogo" />
              </Link>
            </LogoContainer>
            <ul>
              <li>
                <GetQuote
                  href="https://checkout.lodgify.com/kathryn-kessler/en/?currency=CAD#/231709"
                  target="_blank"
                >
                  <span>book now</span>
                </GetQuote>
              </li>
            </ul>
          </Headertop>
          <Headerbottom>
            <Nav>
              <Burger nav={nav} onClick={toggleMenu}>
                <div />
                <div />
                <div />
              </Burger>
              <NavList nav={nav}>
                <li>
                  <StyledLink to="/about">about</StyledLink>
                </li>
                <Dropdown>
                  <StyledLink to="/groups-and-events">
                    groups & events
                    <FaAngleDown size={20} />
                  </StyledLink>
                  <ul>
                    <li>
                      <StyledLink to="/groups-and-events/weddings">
                        weddings
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/groups-and-events/yoga-retreats">
                        yoga retreats
                      </StyledLink>
                    </li>
                  </ul>
                </Dropdown>
                <li>
                  <StyledLink to="/suites">suites</StyledLink>
                </li>
                <li>
                  <StyledLink to="/explore">explore</StyledLink>
                </li>
                <li>
                  <StyledLink to="/reviews">reviews</StyledLink>
                </li>
                <li>
                  <StyledLink to="/gallery">gallery</StyledLink>
                </li>
                <li>
                  <StyledLink to="/contact">contact</StyledLink>
                </li>
               {eventData?.length > 0 && <li>
                  <StyledLink to="/events">events</StyledLink>
                </li>}
               {blogData?.length > 0 && <li>
                  <StyledLink to="/blogs">blogs</StyledLink>
                </li>}
                {/* <Dropdown>
                  <StyledLink to="/events">
                    events
                    <FaAngleDown size={20} />
                  </StyledLink>
                  <ul>
                    {eventData.map(( node ) => (
                      <li key={node?.slug}>
                        <StyledLink to={`/events/${node?.slug}`}>
                          {node?.title}
                        </StyledLink>
                      </li>
                    ))}
                  </ul>
                </Dropdown>
                <Dropdown>
                  <StyledLink to="/blogs">
                    blogs
                    <FaAngleDown size={20} />
                  </StyledLink>
                  <ul>
                    {blogData.map(( node ) => (
                      <li key={node?.slug}>
                        <StyledLink to={`/blogs/${node?.slug}`}>
                          {node?.title}
                        </StyledLink>
                      </li>
                    ))}
                  </ul>
                </Dropdown> */}
                <li>
                  <GetQuoteMobile
                    href="https://checkout.lodgify.com/kathryn-kessler/en/?currency=CAD#/231709"
                    target="_blank"
                  >
                    <span>book now</span>
                  </GetQuoteMobile>
                </li>
              </NavList>
            </Nav>
          </Headerbottom>
        </Container>
      </Header>
    </div>
  )
}
