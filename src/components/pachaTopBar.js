import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Bar = styled.div`
  background: var(--clr-light);
  padding: 0.5em;
  font-size: var(--fs-sm);
  text-align: center;
`

export default function PachaTopBar() {
  return (
    <Bar>
      <Link to="/">← Back to Misty Ridge Retreat</Link>
    </Bar>
  )
}
