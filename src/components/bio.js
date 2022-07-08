import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container, Section, Flex } from "./layoutComponents"
import { AnchorInline } from "./buttons"

const HostCard = styled.div`
  position: relative;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
  grid-gap: 1em;

  .host-img {
    height: 100%;
  }
`

const Name = styled.p`
  position: absolute;
  bottom: 0;
  padding: 1em 2em;
  background: rgba(0, 0, 0, 0.7);
  color: var(--txt-light);
  width: 100%;
`

const P = styled.p`
  max-width: 70ch;
  margin: 0 auto;
`

export default function Bio() {
  return (
    <Section>
      <Container className="spacing">
        <h2 className="title bold caps accent center">meet your hosts</h2>
        <Grid>
          <HostCard className="spacing">
            <StaticImage
              className="host-img"
              src="../images/kathryn-kessler-1.jpg"
              alt="kathryn kessler headshot"
            />
            <Name className="body--large  caps">kathryn kessler</Name>
          </HostCard>
          <HostCard className="spacing">
            <StaticImage
              className="host-img"
              src="../images/allen-kessler.jpg"
              alt="allen kessler headshot"
            />
            <Name className="body--large  caps">allen kessler</Name>
          </HostCard>
        </Grid>
        <P className="center">
          Did you know that Kathryn is the owner and operator of{" "}
          <AnchorInline href="https://www.bookwithkathryn.com" target="_blank">
            Pacha Mamma Massage & Sound Therapy
          </AnchorInline>
          , which is located on-site of the B&B? She has been practicing as a
          Registered Massage Therapist for nearly 30 years now, don't forget to
          book in with her for a true relaxation experience! <br />
        </P>
        <P className="center">
          Did you know that Allen creates his own steak spice mix, and collects
          honey directly on-site of the B&B! You won't want to miss out on the
          ultimate breakfast and dining experience
        </P>
        <div>
          <Flex>
            <StaticImage src="../images/allen-honey-making.jpg" />
            <StaticImage src="../images/honey-mix.jpg" />
          </Flex>
          <p className="bold italics center ">
            * Honey collected from the Misty Ridge Retreat B&B honey bee farm!
          </p>
        </div>
        <div>
          <p>
            The name Misty Ridge dates back to 1992 when we purchased our second
            acreage as a married couple. The name never left our dreams. Fast
            forward to 2017. Our urge to leave the city and get back to a
            peaceful acreage life became our driving force to start searching
            for a little piece of paradise. After an extensive search, we
            decided to pause our search for six months. Well, the universe had
            different plans. One morning we stumbled upon a listing that met our
            dreams. How could we say no! <br />
            <br /> We are Allen and Kathryn Kessler. Since 1992 we talked about
            owning and hosting a traditional bed and breakfast. <br />
            <br /> Welcome to our little piece of paradise, Misty Ridge Retreat
            B&B. MRRBB boasts endless peace, tranquility, beauty and connection
            to nature. The key features of our property offer kilometres of
            groomed walking trails that can be enjoyed year round. Kids of all
            ages love the sports field that offers a place to play lawn games or
            for the happy couple a wonderful place for their reception and
            dance. Turtle Hill is the perfect place for a summer wedding
            ceremony under the ivy trailed arch. It is also the perfect place to
            watch the fireworks during the Calgary Stampede without the crowds.
            Or star gazing in “Dark Sky County” of Foothills. The gentle rolling
            slopes are great for summertime slip ’n slide fun or wintertime
            tobogganing. Throughout the summer the yard is sprinkled with
            wildflowers and offers the foraging minded a delectable delight. Do
            you love berries?! Well, we have berries, saskatoon, raspberries and
            gooseberries. <br />
            <br /> The trails will take you through the Enchanted Forest where
            you will find some enchanted creatures, including monkeys! Take a
            bucket with you so that you can enjoy picking some of those berries.{" "}
            <br />
            <br /> The property is uniquely shaped in a panhandle which provides
            the ultimate in privacy and peace. One last comment, the previous
            owners blessed this space when they created this piece of paradise.
            As the foundation was poured soapstone bricks were carved with words
            and placed around the perimeter of the home. Each word was literally
            cemented into the foundation. Words like; PEACE (as you walk into
            the front door), FAMILY (as you sit at our hearth), JOY (in the
            centre of the home), WEALTH, LOVE, WISDOM, SUCCESS, LEARNING,
            CREATIVITY, and ADVENTURE. It is our sincere hope that your stay at
            our little piece of paradise is peaceful, rejuvenating and that you
            find a way to reconnect with nature. Allen & Kathryn
          </p>
        </div>
      </Container>
    </Section>
  )
}
