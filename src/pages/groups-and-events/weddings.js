import React from "react"
import styled from "styled-components"
import SEO from "../../components/seo"
import BannerSecondary from "../../components/banners/bannerSecondary"
import EventCallToAction from "../../components/eventCallToAction"
import Experience from "../../components/experience"
import InfoBanner from "../../components/infoBanner"
import Layout from "../../components/layout"
import Wildlife from "../../components/wildlife"
import Features from "../../components/features"
import Breakfast from "../../components/breakfast"
import Map from "../../components/map"
import More from "../../components/more"
import Rooms from "../../components/rooms"
import Review from "../../components/review"
import {
  GridTwo,
  GridAuto,
  Flex,
  Section,
  Container,
} from "../../components/layoutComponents"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorPrimary, ButtonPrimary } from "../../components/buttons"

import CtaImg from "../../images/weddings/land-for-wedding.jpeg"

const GridItem = styled.div`
  box-shadow: var(--shadow-light);
  padding: 2em;
`

const ImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
`

export default function Weddings() {
  return (
    <Layout>
      <SEO title="Outdoor Wedding Venue at our Calgary B&B" description="" />
      <BannerSecondary
        title="the perfect venue for your small wedding"
        description="Welcome to the Misty Ridge B&B that can be the perfect setting for your small intimate wedding located just outside of Calgary on our 6.5 acres of unique land in the beautiful rolling foothills of Alberta"
        to1="/"
        link1="Home"
        to2="/events-and-groups"
        link2="Events & Groups"
        to3="/groups-and-events/weddings"
        link3="Weddings"
      />

      <Section>
        <Container>
          <Flex>
            <div className="spacing">
              <h1 className="title bold accent">
                outdoor wedding venue calgary, AB
              </h1>
              <p>
                Welcome to the Misty Ridge B&B that can be the perfect setting
                for your small intimate wedding located just outside of Calgary
                on our 6.5 acres of unique land in the beautiful rolling
                foothills of Alberta. Our B&B outdoor wedding venue Calgary
                offers a truly magical and romantic alter at the top of Turtle
                Hill that provides breakthaking views of the rolling foothills
                and sits on our 6.5 acres of open land for the bride, groom,
                family, and entire small wedding party to enjoy as you read your
                vows and commit your lives to one another.
              </p>
              <ul>
                <li>Wedding ceremony capacity: 50 people, sleeps 9 guests</li>
                <li>Breakfast included with your stay</li>
                <li>
                  Wedding alter on Turtle Hill that overlooks the foothills
                </li>
                <li>Wedding tents included with your stay</li>
                <li>
                  Themed bedrooms and spa-like bathrooms for the Bride & Groom
                </li>
                <li>
                  6.5 acres of outdoor gathering spaces, hot tub, firepits, and
                  more
                </li>
                <li>Massage and Sound Therapy on site!</li>
              </ul>
              <AnchorPrimary
                href="https://checkout.lodgify.com/kathryn-kessler/en/?currency=CAD#/231709"
                target="_blank"
              >
                check availability
              </AnchorPrimary>
            </div>
            <StaticImage
              src="../../images/weddings/calgary-bed-and-breakfast-wedding.jpg"
              alt="outdoor wedding venue calgary, ab"
              className="stretch"
            />
          </Flex>
        </Container>
      </Section>
      <Section className="spacing">
        <h2 className="caps title bold accent center">
          why use our B&B for your wedding venue?
        </h2>
        <ImgGrid>
          <StaticImage
            src="../../images/weddings/calgary-wedding-alter.jpeg"
            alt="unique calgary b&b wedding venue"
          />
          <StaticImage
            src="../../images/weddings/stress-free-wedding.jpeg"
            alt="tent wedding calgary at our b&b"
          />
          <StaticImage
            src="../../images/weddings/calgary-wedding-packages-at-bb.jpeg"
            alt="calgary bed and breakfast wedding packages"
          />
          <StaticImage
            src="../../images/weddings/land-for-wedding.jpeg"
            alt="calgary wedding ceremony venue"
          />
        </ImgGrid>
        <Container>
          <GridTwo>
            <div>
              <h3 className="caps bold">unique wedding experience</h3>
              <p>
                Our Calgary B&B wedding venue sleeps up to 9 guests, and can
                hold a capacity of 50 people for your small wedding. As your
                hosts, we make every effort to make your family and friends feel
                at home and creating the right vibe for your special day. We
                offer tents for your wedding ceremony and reception, an alter at
                the top of Turtle Hill, comfortable themed bedrooms, spa-like
                bathrooms, absolutely stunning scenery and walking trails with
                an abundance of outdoor gathering spaces where you can
                peacefully observe the wildlife.{" "}
              </p>
            </div>
            <div>
              <h3 className="caps bold">stress free</h3>
              <p>
                We strive to make your special wedding day as easy and stress
                free as possible, although the surrounding foothills and
                wildlife will take care of that for you! Are you thinking about
                having a tent wedding Calgary? We can help you throughout the
                wedding planning process to determine where to place the tents,
                where to have your ceremony, where to put the dancefloor, and
                everything else to have the perfect outdoor wedding near Calgary
                & Okotokes.
              </p>
            </div>
            <div>
              <h3 className="caps bold">
                calgary bed and breakfast wedding packages
              </h3>
              <p>
                Misty Ridge Retreat Bed and Breakfast wedding packages include
                one of the most favoured and unique aspects is the scrumptious
                breakfast options we will whip up during your stay. Whether it’s
                the day of your wedding, or the morning after, we can make a
                mean egg casserole, delicious french toast along with our
                homebrewed coffee and homemade honey. We have plenty of other
                breakfast options too!
              </p>
            </div>
            <div>
              <h3 className="caps bold">6.5 acres of land for your wedding</h3>
              <p>
                Enjoy the wedding of your dreams on our beautiful 6.5 acres of
                land nestled in the rolling foothills of Alberta, just outside
                of Calgary! We offer separate rooms for the groom and bride to
                prepare before the ceremony, and you and your family can even
                enjoy the hot tub and stargazing at the end of your wedding day
                for reflection!
              </p>
            </div>
          </GridTwo>
        </Container>
      </Section>
      <Wildlife />
      <Section>
        <Container className="spacing">
          <h2 className="center caps accent title bold">
            5 star foothills bed and breakfast - the ultimate calgary, alberta
            small wedding
          </h2>
          <GridAuto>
            <Review
              review="Misty Ridge was the perfect venue for our small wedding! Allen and Kathryn were gracious hosts who made every effort to make our family feel at home and create the right vibe for our special day. The venue features very comfortable themed rooms (nice beds!), spa-like bathrooms, absolutely stunning scenery and walking trails, an abundance of outdoor gathering spaces, and the truly magical “Turtle Hill” where our ceremony was held. Allen and Kathryn bring a very special energy to the property, and also make the best breakfasts ever! We are so grateful to them for hosting us, and look forward to staying at their BnB again soon"
              name="Luke Rosewood"
              date="June 2021"
            />
            <Review
              review="My husband and I had our Wedding at Kathryn and Allen's property on July 31, 2021.
              Everything turned out so perfectly, and so beautiful. The flowers, landscape, scenery, and wildlife are something we don't often see living in the city. We couldn't have had the wedding of our dreams, without Misty Ridge Retreat B&B.
              Kathryn and Allen worked with us at different times throughout the planning process to figure out where to place tents, where to have the ceremony, where to put the dance floor, etc. They allowed us to use one of there own tents, so we didn't have to rent an additional one through the rental company. In addition, our MC did not have a necessary cord for the microphone, and Allen very kindly lent us one of his own.
              We had our ceremony on Turtle Hill, which is the most romantic place to be. The view is breathtaking. There is an alter on Turtle Hill, and our florist simply added florals and greenery. This created the most magical place to be and we feel honoured that this is where we were able to commit our lives to each other."
              name="Brittani Armstrong"
              date="July 2020"
            />
          </GridAuto>
        </Container>
      </Section>
      <EventCallToAction
        img={CtaImg}
        title="book the wedding of your dreams with us!"
        description="Book your wedding at our B&B retreat and enjoy a scrumptious breakfast, stunning scenery and walking trails, wildlife, outdoor gathering spaces and more on your special day!"
        button="contact us today"
      />
      <Experience />
      <Features />
      <Breakfast />
      <Map />
      <More />
      <Rooms />
      <EventCallToAction
        img={CtaImg}
        title="book the wedding of your dreams with us!"
        description="Book your wedding at our B&B retreat and enjoy a scrumptious breakfast, stunning scenery and walking trails, wildlife, outdoor gathering spaces and more on your special day!"
        button="contact us today"
      />
    </Layout>
  )
}
