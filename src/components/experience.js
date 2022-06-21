import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section, Container, Flex, FlexMobileOpp } from "./layoutComponents"

const Quote = styled.div`
  padding: 1em;
  background: var(--clr-accent);
  color: var(--txt-light);
  border-radius: var(--br);
`

const Item = props => {
  return (
    <div className="spacing">
      <h2 className="accent heading bold">{props.heading}</h2>
      <p>{props.description}</p>
      <Quote>
        <p className="italics bold">"{props.quote}"</p>
        <p>~ {props.name}</p>
      </Quote>
    </div>
  )
}

export default function Experience() {
  return (
    <Section>
      <Container className="spacing-lg">
        <Flex>
          <StaticImage
            className="stretch"
            src="../images/a-truly-unique-breakfast.jpg"
            alt=""
          />
          <Item
            heading="a truly unique breakfast experience"
            description="Enjoy a well-prepared and fullfilling 2-course gourmet breakfast  from the comfort of your bed, or with the view of the wide open foothills and abundant wildlife."
            quote="Allen and Kathryn bring a very special energy to the property, and also make the best breakfasts ever"
            name="Luke Rosewood"
          />
        </Flex>
        <FlexMobileOpp>
          <Item
            heading="massage & sound therapy"
            description="After a perfect day of sightseeing and touring the foothills and nearby cities and shopping areas, book in for a massage and sound therapy sessions with our onsight massage and sound therapy clinic (Pacha Mamma Massage)!"
            quote="Wow! What a rare find. Not too far south of Spruce Meadows. Like a mini spa and resort with massages on site."
            name="John Watson"
          />
          <StaticImage
            className="stretch"
            src="../images/b&b-massage-and-sound-therapy.jpg"
            alt=""
          />
        </FlexMobileOpp>
        <Flex>
          <StaticImage
            className="stretch"
            src="../images/hot-tub-stargazing-at-bb.jpg"
            alt=""
          />
          <Item
            heading="hot tub stargazing"
            description="Close out your evening by enjoying a soak in the hot tub while admiring the impressive viewings of the dark night sky where you’ll see constellations and northern lights!"
            quote="I love the fact that there is a hot meal waiting at the end of a busy day and I can close out the evening by enjoying a soak in the hot tub and admiring the view"
            name="Rob Henshaw"
          />
        </Flex>
        <FlexMobileOpp>
          <Item
            heading="small town shopping"
            description="We are centrally located to many small towns that offer a unique shopping experience, or you can pop into the city for larger shopping centres."
            quote="An exceptional place to stay if looking for peace and quiet. Alternatively, you are only 15 minutes from Calgary or Okotoks if you are looking for a little more excitement."
            name="Robin Spiers"
          />
          <StaticImage
            className="stretch"
            src="../images/small-town-shopping.jpg"
            alt=""
          />
        </FlexMobileOpp>
        <Flex>
          <StaticImage
            className="stretch"
            src="../images/walking-trails-at-calgary-bb.jpg"
            alt=""
          />
          <Item
            heading="6.5 acres of stunning scenery & walking trails"
            description="Relax with nature and rediscover your inner peace by enjoying the stunning scenery of the wide open foothils anywhere on our 6.5 acres of land and immerse yourself in nature on our 3.5 km of walking trails."
            quote="Fantastic people! Fantastic hosts! Amazing views with top notch accommodations. I would recommend."
            name="Brad Dubeau"
          />
        </Flex>
      </Container>
    </Section>
  )
}
