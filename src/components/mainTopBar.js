import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const TopBarWrapper = styled.div`
  background: rgba(232, 84, 20, 0.5); /* Transparent orange background */
  color: var(--txt-light);
  padding: 0.5em 0;
  text-align: center;
`

const TopBarLink = styled(Link)`
  color: var(--txt-light);
  text-decoration: none;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  
  &:hover {
    text-decoration: underline;
  }
`

export default function MainTopBar() {
  return (
    <TopBarWrapper>
      <TopBarLink to="/pacha-mamma">
        Go to Pacha Mamma →
      </TopBarLink>
    </TopBarWrapper>
  )
}