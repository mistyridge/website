import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BannerSecondary from "../../components/banners/bannerSecondary"
import {
  Container,
  Flex,
  Section,
  GridAuto,
} from "../../components/layoutComponents"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorPrimary, ButtonPrimary } from "../../components/buttons"
import Review from "../../components/review"
import EventCallToAction from "../../components/eventCallToAction"

import CtaImg from "../../images/a-truly-unique-breakfast.jpg"
import Experience from "../../components/experience"
import InfoBanner from "../../components/infoBanner"
import Features from "../../components/features"
import Rooms from "../../components/rooms"

export default function YogaRetreats() {
  return (
    <Layout>
      <SEO title="Alberta Yoga Retreat at our B&B" description="" />
      <BannerSecondary
        title="the perfect spot to lead a yoga retreat or workshop!"
        description="Welcome to the Misty Ridge B&B that can be the perfect setting for you to lead a yoga retreat or workshop!"
        to1="/"
        link1="Home"
        to2="/events-and-groups"
        link2="Events & Groups"
        to3="/groups-and-events/yoga-retreats"
        link3="Yoga Retreats"
      />
      <Section>
        <Container>
          <Flex>
            <div className="spacing">
              <h1 className="title bold accent caps">alberta yoga retreat</h1>
              <p>
                If you are looking to lead, host, or attend a yoga retreat in
                Alberta, this is the perfect spot for you! Our B&B sits on 6.5
                acres of land which is nestled in the rolling foothills of
                Alberta and we can hold up to 50 guests (9 overnighters) on our
                location! Our bed and breakfast includes delicious morning meals
                and we can accommodate various food allergies for you and your
                yoga students. We strive to make your yoga retreat a safe and
                positive experience and the on-site B&B accommodation is
                comfortable and clean, and is in close proximity to Calgary. Our
                B&B Retreat sleeps up to 9 of your yoga students, but others can
                easily commute in from the city. If you are looking for a
                relaxing and quiet yoga retreat, this will be the perfect
                setting as you will be well enough removed from the city to
                properly experience inner reflection Located in the rolling
                foothills a bit southwest of Calgary. A fantastic place to
                connect with nature and reach a peaceful state of mind for the
                students of your yoga retreat Alberta
              </p>
              <ul>
                <li>Yoga retreat capacity: 50 people, sleeps 9 guests</li>
                <li>Breakfast included with your stay</li>
                <li>
                  Wedding alter on Turtle Hill that overlooks the foothills
                </li>
                <li>Tents included with your retreat</li>
                <li>
                  4 large and comfortable bedrooms with spa-like bathrooms
                </li>
                <li>
                  6.5 acres of outdoor gathering spaces, hot tub, firepits, and
                  more
                </li>
                <li>Massage and Sound Therapy on-site</li>
              </ul>
              <AnchorPrimary
                href="https://checkout.lodgify.com/kathryn-kessler/en/?currency=CAD#/231709"
                target="_blank"
              >
                check availability
              </AnchorPrimary>
            </div>
            <StaticImage
              src="../images/yoga/calgary-bed-and-breakfast-yoga-retreat.jpg"
              alt="calgary alberta yoga retreat at our B&B"
              className="stretch"
            />
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container className="spacing">
          <h2 className="center caps accent title bold">
            the ultimate yoga retreat in alberta
          </h2>
          <GridAuto>
            <Review
              review="I recently led a retreat for 14 womxn at the Misty Ridge Retreat B & B. The beautiful outdoor scenery and the space they created for our yoga Practices were perfect for our group. Kathryn provided delicious morning meals that accommodated our various food allergies and it was evident that much care had gone into insuring that our retreat was a safe and positive experience. The on-site accommodation is comfortable, clean and beautiful and being in close proximity to Calgary, we were able to have students commute in to the retreat as well. This was a perfect setting, well enough removed from the city to properly relax but we'll within reach of everything we needed! Highly recommend and already booking for next year!"
              name="mandorla yoga institute"
              date="June 2021"
            />
            <Review
              review="I went for a retreat/workshop led by Allen & Kathryn Kessler, the hosts and owners of Misty Ridge Retreat B&B. Misty Ridge is located in the rolling foothills a bit southwest of Calgary and is a fantastic place to connect with nature. The bedrooms are sizeable (bigger than some hotel/motel rooms I've stayed in!) and have very comfortable beds which are adjustable by remote control. The dining room features large windows that offer a view of the foothills and wildlife. It's a fantastic place to relax.
              The workshop was excellent and well-led. I'm still processing what I've learned."
              name="Tom Christiansen"
              date="March 2022"
            />
          </GridAuto>
        </Container>
      </Section>
      <EventCallToAction
        img={CtaImg}
        title="book your next yoga retreat with us!"
        description="Book your yoga retreat at our B&B retreat and enjoy a scrumptious breakfast, stunning scenery and walking trails, wildlife, outdoor gathering spaces and more during your stay!"
        button="contact us today"
      />
      <Experience />
      <Features />
      <Rooms />
      <EventCallToAction
        img={CtaImg}
        title="book your next yoga retreat with us!"
        description="Book your yoga retreat at our B&B retreat and enjoy a scrumptious breakfast, stunning scenery and walking trails, wildlife, outdoor gathering spaces and more during your stay!"
        button="contact us today"
      />
    </Layout>
  )
}
