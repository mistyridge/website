import React from "react"
import styled from "styled-components"
import { FaStar, FaGoogle } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  border: 1px solid var(--clr-accent);
  padding: 2em;
  border-radius: var(--br);
  a {
    text-decoration: underline;
  }
`

const FlexStars = styled.div`
  display: flex;
  & > * + * {
    margin-left: 5px;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;

  & * + * {
    margin-left: 2px;
  }
`

const Date = styled.p`
  font-size: 0.75rem;
  margin-top: 0;
  line-height: 1;
`

const fontStyle = {
  color: "gold",
}

export default function Review(props) {
  return (
    <Wrapper className="spacing">
      <FlexStars>
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
      </FlexStars>
      <p className="italics">"{props.review}"</p>
      <a
        href="https://www.google.com/travel/hotels/misty%20ridge%20retreat/entity/CgoI-pSvxs_mzY5LEAE/reviews?q=misty%20ridge%20retreat&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4597339%2C4649665%2C4722900%2C4723331%2C4741665%2C4757164%2C4758493%2C4762561%2C4786153%2C4786958%2C4794648&hl=en-CA&gl=ca&ssta=1&rp=EPqUr8bP5s2OSxD6lK_Gz-bNjks4AkAASAHAAQI&ictx=1&sa=X&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESABpJCisSJzIlMHg1MzcxYTE5Mzc4YmZjMTE3OjB4NGIxZDM3MzRmOGNiY2E3YRoAEhoSFAoHCOYPEAYYDRIHCOYPEAYYDxgCMgIQACoJCgU6A0NBRBoA&ved=0CAAQ5JsGahcKEwi4sdn916j4AhUAAAAAHQAAAAAQAw"
        target="_blank"
        className="accent"
      >
        Read more Google reviews &#8594;
      </a>
      <Flex>
        <FcGoogle size={35} />
        <div>
          <p className="bold caps">{props.name}</p>
          <Date className="caps">{props.date}</Date>
        </div>
      </Flex>
    </Wrapper>
  )
}
