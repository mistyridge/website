import React from "react"
import styled from "styled-components"
import { Container, GridAuto, Section } from "../components/layoutComponents"
import Layout from "../components/layout"
import Hero from "../components/heros/hero"
import InfoBanner from "../components/infoBanner"
import Wildlife from "../components/wildlife"
import Experience from "../components/experience"
import Features from "../components/features"
import Breakfast from "../components/breakfast"
import Map from "../components/map"
import More from "../components/more"
import Rooms from "../components/rooms"
import FeaturedFaq from "../components/faqs/featuredFaq"
import Offers from "../components/offers"
import BookBox from "../components/bookBox"
import Review from "../components/review"
import { AnchorInline, ButtonInline } from "../components/buttons"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import CallToAction from "../components/callToAction"

import CtaImg from "../images/bed-and-breakfast-calgary.jpeg"
import Hero2 from "../components/heros/hero2"

import video from "../video/video.mp4"

const device = {
  md: "48em",
}

const Flex = styled.div`
  display: flex;
  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }
`

const ImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
`

const BgWrapper = styled.div`
  background: url("../images/calgary-bb-wrapper.jpeg"), rgba(0, 0, 0, 0.6);
  background-blend-mode: overlay;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: var(--txt-light);
`

export default function Home() {
  return (
    <Layout>
      <SEO
        title="5 Star Bed and Breakfast Near Calgary, AB | Alberta B&B Retreat"
        description="Welcome to The Misty Ridge Retreat B&B! Our Bed and Breakfast Calgary, AB is just minutes from the city and nestled in the beautiful rolling Alberta Foothills. Book your stay and enjoy a retreat to relax and reconnect with nature and to get away from it all!"
      />
      <Hero />
      <Section>
        <Container className="spacing">
          <div style={{display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h2 className="title bold caps center accent">Welcome to the Sacred Dream Lodge!</h2>
              <p>
                Located in the rolling foothills of Alberta, just an hour away from the Canadian Rockies. 
              </p>
              <br></br>
              <p>
                The Sacred Dream Lodge is the dream of Allen & Kathryn Kessler, owners & curators. Their dream was to create a sacred place for all our relations to dream, meditate, heal, relax & rejuvenate. A place for celebration & community.
              </p>
              <br></br>
              <p> 
                At 800 square feet, the lodge is the perfect venue for small intimate weddings, family get togethers, yoga retreats, house concerts and more. It is our honor to share the Sacred Dream Lodge with you!
              </p>
              <br></br>
              <p> 
                - Allen & Kathryn
              </p>
          </div>
            <div>
              <video controls style={{ width: '50%', display: 'block', margin: '0 auto' }}>
              <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="spacing">
        <Container></Container>
        <h1 className="title bold caps center accent">
          welcome to our bed and breakfast located near calgary, AB
        </h1>
        <ImgGrid>
          <StaticImage
            src="../images/front.jpg"
            alt="bed and breakfast calgary, ab"
          />
          <StaticImage
            src="../images/bed-and-breakfast-calgary.jpeg"
            alt="bed and breakfast calgary, ab"
          />
          <StaticImage
            src="../images/bed-and-breakfast-calgary-2.jpeg"
            alt="bed and breakfast calgary, ab"
          />
          <StaticImage
            src="../images/bed-and-breakfast-calgary-3.jpeg"
            alt="bed and breakfast calgary, ab"
          />
          <StaticImage
            src="../images/bed-and-breakfast-calgary-4.jpeg"
            alt="bed and breakfast calgary, ab"
          />
        </ImgGrid>
        <Container className="spacing">
          <Flex>
            <div>
              <p>
                Welcome to your home away from home bed and breakfast located
                near Calgary, in the rolling foothills of Alberta. This unique
                6.5 acre b&b retreat is just minutes from Spruce Meadows and
                only 40 minutes from downtown Calgary. Misty Ridge Retreat B&B
                Calgary offers panoramic views of the city skyline on one side,
                and majestic views of the rolling foothills on the other side,
                abundant wildlife and most importantly, the opportunity to
                relax, reconnect with nature and to "get away from it all".
                Business or pleasure, the four cozy rooms of our Calgary b&b
                offer a king size bed that will separate into two twin beds,
                free highspeed wifi, free parking, and shared bathrooms.
              </p>
            </div>
            <div>
              <p>
                Start your day sipping homebrewed coffee or end a perfect day of
                touring the area on the deck watching birds, eagles, elk, deer,
                moose, or even a wolf or two stroll by. Our Calgary bed and
                breakfast is centrally located to many small towns such as
                Okotokes, Bragg Creek, Turner Valley, Black Diamond, and more
                that offer a unique shopping experience. Our bed and breakfast
                is located in the rolling foothills just southwest of Calgary,
                so you can easily pop into the city for larger shopping centres.
              </p>
            </div>
          </Flex>
        </Container>
      </Section>
      <InfoBanner />
      <Wildlife />
      <Section>
        <Container className="spacing">
          <h2 className="title bold center caps accent">
            5 star foothills bed and breakfast - the ultimate calgary, alberta
            retreat
          </h2>
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
              review="Misty Ridge is an absolute paradise! Nestled in the rolling foothills, it has all the qualities of being in the country, and only a short drive from Calgary. Al and Kathryn are the most amazing and accommodating hosts, who went above and beyond to ensure our stay was nothing short of perfect! The stunning views, modern rooms, star-gazing ..., and the best ginger snaps on earth, were only a few of the many highlights of our stay, we even saw some elk crossing through the property!"
              name="Reid Stanek"
              date="May 2019"
            />
           </GridAuto>
        </Container>
      </Section>
      <BgWrapper>
        <Section>
          <Container>
            <Flex>
              <div className="spacing">
                <h2 className="caps title bold accent">
                  retreat, relax, reconnect
                </h2>
                <p>
                  Come relax at the Misty Ridge Calgary B&B Retreat, connect to
                  nature and rediscover your inner peace. Enjoy day trips to the
                  Calgary Stampede, Spruce Meadows, Kananaskis Country, Banff
                  National Park, and many more{" "}
                  <ButtonInline to="/explore">nearby attractions</ButtonInline>.
                  Our amenities in each room of our Calgary B&B will help you to
                  relax even more on a Dreameasy adjustable bed that can easily
                  separate into two twin beds and adjust to improve your
                  sleeping comfort. Each room comes with free wifi, free parking
                  and a freshly made to order breakfast.
                </p>
              </div>
              <div className="spacing">
                <h2 className="caps title bold accent">
                  on-site massage therapy
                </h2>
                <p>
                  After a perfect day of sight seeing and touring or of business
                  meetings, book in for a massage and sound therapy session.
                  Misty Ridge Retreat B&B Calgary has on its property{" "}
                  <AnchorInline
                    href="https://www.bookwithkathryn.com"
                    target="_blank"
                  >
                    Pacha Mamma Massage & Sound Therapy
                  </AnchorInline>
                  . This unique combination of a therapeutic relaxation and
                  sound therapy improves sleep and immunity, reduces stress both
                  physically and emotionally and decreases pain so you can
                  experience a true Alberta retreat at our beautiful bed and
                  breakfast nestled in the rolling foothills of Alberta and
                  located just minutes outside the city of Calgary.
                </p>
              </div>
            </Flex>
          </Container>
        </Section>
      </BgWrapper>
      <Experience />

      <Features />
      <Breakfast />
      <Map />
      <More />
      <Rooms />
      <FeaturedFaq />
      <Offers />
      <CallToAction
        img={CtaImg}
        title="book now and get away from it all!"
        description="Enjoy a truly unique bed and breakfast retreat with a scrumptious breakfast, absolutely stunning scenery, walking trails, wildlife, outdoor gathering spaces, and much more!"
      />
    </Layout>
  )
}
