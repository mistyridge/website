import React from "react"
import styled from "styled-components"
import { Section, Container, Flex, FlexMobileOpp } from "./layoutComponents"

const MapFrame = styled.iframe`
  width: 100%;
  height: 450px;
  border: 0;
`

export default function MapFull() {
  return (
    <div>
      <MapFrame
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.0248065720525!2d-114.18329598425548!3d50.81217907952695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371a19378bfc117%3A0x4b1d3734f8cbca7a!2sMisty%20Ridge%20Retreat%20B%20and%20B!5e0!3m2!1sen!2sca!4v1654554013822!5m2!1sen!2sca"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
