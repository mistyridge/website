import React from "react"
import styled from "styled-components"
import { FaStar, FaGoogle } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { StaticImage } from "gatsby-plugin-image"
import { Container, GridAuto, Section } from "./layoutComponents"

const Wrapper = styled.div`
  background: var(--clr-light-secondary);
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

const Review = props => {
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
        href="https://www.google.com/maps/place/Pacha+Mamma+Massage+and+Sound+Therapy/@50.8120469,-114.1811013,15z/data=!4m7!3m6!1s0x0:0x33c645a0686ae67a!8m2!3d50.8120469!4d-114.1811013!9m1!1b1"
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

const AllReviews = () => {
  return (
    <Section>
      <Container>
        <GridAuto>
          <Review
            name="Katie Banham"
            review="I have had many massages in my time but my massage with Kathryn was by far the best!  She managed to work my tricky muscles into submission whilst also providing me with a truly relaxing experience.  The addition of beautiful music from the unique sound therapy bed transported me to an all-encompassing relaxation experience for both body and mind."
            date="June 2021"
          />
          <Review
            name="Tom Christiansen"
            review="I love starting my weekend with a massage at Pacha Mamma. Kathryn is very personable and professional, and she has done wonders on my neck and back. I used to have pain just rolling out of bed. Thanks to her work, that pain is now gone. She has also shown me some stretches to target specific muscles, which have helped as well.
Kathryn was recommended to me by a friend. At first I was put off a bit by the longish drive (I come from just north of Downtown Calgary), but it only takes me about 40 minutes to get there and I've come to really like the trip through the rolling foothills. It's basically my biweekly retreat."
            date="August 2021"
          />
          <Review
            name="Angela Jenkins-Schoenfeld"
            review="I have had several professional massages over the years but Kathryn at Pacha Mamma’s surpasses my expectations. The combination of her skillful massage technique along with the sound therapy leaves you feeling tension free, relaxed and revitalized. Truly a unique experience. I would recommend Pacha Mamma’s 100%."
            date="September 2021"
          />
        </GridAuto>
      </Container>
    </Section>
  )
}

export default AllReviews