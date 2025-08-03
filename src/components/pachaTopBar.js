import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Bar = styled.div`
  background: rgba(232, 84, 20, 0.5); /* Orange background for main site */
  padding: 0.5em;
  font-size: var(--fs-sm);
  text-align: center;
`

const TopBarLink = styled(Link)`
  color: var(--txt-light);
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

export default function PachaTopBar() {
  return (
    <Bar>
      <TopBarLink to="/">← Back to Misty Ridge Retreat</TopBarLink>
    </Bar>
  )
}
