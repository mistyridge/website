import React from "react"
import BannerPrimary from "../components/banners/bannerPrimary"
import InfoBanner from "../components/infoBanner"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section, Container, GridAuto } from "../components/layoutComponents"
import Review from "../components/review"

export default function Reviews() {
  return (
    <Layout>
      <SEO
        title="Guest Reviews"
        description="We have received nothing but 5-star reviews from the Misty Ridge Retreat B&B guests! Visit our reviews page to read about guest experiences."
      />
      <BannerPrimary
        title="reviews"
        description="The recent guests of the Misty Ridge Retreat B&B have had a 5-star experience with us! Read what they have said!"
        to1="/"
        link1="Home"
        to2="/reviews"
        link2="Reviews"
      />

      <Section>
        <Container className="spacing">
          <GridAuto>
            <Review
              review="I went for a retreat/workshop led by Allen & Kathryn Kessler, the hosts and owners of Misty Ridge Retreat B&B. Misty Ridge is located in the rolling foothills a bit southwest of Calgary and is a fantastic place to connect with nature. The bedrooms are sizeable (bigger than some hotel/motel rooms I've stayed in!) and have very comfortable beds which are adjustable by remote control. The dining room features large windows that offer a view of the foothills and wildlife. It's a fantastic place to relax."
              name="Tom Christiansen"
              date="April 2022"
            />
            <Review
              review="I travel to Calgary on business regularily and I used to stay in a downtown hotel until I got an invite to stay at the Misty Ridge B&B. Now I book all my stays at Misty Ridge when I am in town. Allen and Kathryn who own the B&B are great hosts and make you feel very welcome. The B&B has all of the comforts of home plus an incredible view of the foot hills and the local wildlife. My company is also happy with this arrangement as this option is less expensive compared to downtown hotels."
              name="Rob Henshaw"
              date="June 2020"
            />
            <Review
              review="Misty Ridge is an absolute paradise! Nestled in the rolling foothills, it has all the qualities of being in the country, and only a short drive from Calgary. Al and Kathryn are the most amazing and accommodating hosts, who went above and beyond to ensure our stay was nothing short of perfect! The stunning views, modern rooms, star-gazing from the hot tub, and the best ginger snaps on earth, were only a few of the many highlights of our stay, we even saw some elk crossing through the property!"
              name="Reid Stanek"
              date="May 2019"
            />
          </GridAuto>
        </Container>
      </Section>
      <InfoBanner />
    </Layout>
  )
}
