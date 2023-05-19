import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Container, Flex, Section } from "../../components/layoutComponents"
import BannerSecondary from "../../components/banners/bannerSecondary"
import { AnchorPrimary } from "../../components/buttons"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Wrapper = styled.div`
  h1,
  h2,
  h3,
  p {
    text-align: center;
    max-width: 70ch;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`

export default function HeartRetreat() {
  return (
    <Layout>
      <SEO
        title="Enlightened Heart Retreat Alberta"
        description="A women’s weekend of connection, healing, sacred sound and heart medicine."
      />
      <BannerSecondary
        title="Enlightened Heart Retreat"
        description="A women’s weekend of connection, healing, sacred sound and heart medicine."
        to1="/"
        link1="Home"
        to2="/events-and-groups"
        link2="Events & Groups"
        to3="/groups-and-events/enlightened-heart-retreat"
        link3="Enlightened Heart Retreat"
      />
      <Section>
        <Container>
          <Flex>
            <div className="spacing">
              <div>
                <p>June 2 - 4, 2023</p>
                <h1 className="title bold accent caps">
                  ✨Enlightened Heart Retreat
                </h1>
              </div>
              <p>
                The enlightened heart retreat will be taking place at Misty
                Ridge Retreat B&B in the Calgary Foothills. This will be a
                sacred sound healing and heart medicine to:
              </p>
              <ul>
                <li>Release the past</li>
                <li>Claim your present</li>
                <li>Create your future</li>
              </ul>
              <p>
                A women’s weekend of connection, healing, sacred sound and heart
                medicine.
              </p>
              <p>
                The enlightened heart retreat offers you the space and guidance
                to surrender, release and renew your heart and spirit.
              </p>
              <p>A full body, mind & spirit recalibration.</p>
              <h3>✨ Retreat Highlights ✨</h3>
              <ul>
                <li>Sound bath</li>
                <li>Gong journey</li>
                <li>Drum wash</li>
                <li>1:1 intuitive medium reading with Marie</li>
                <li>1:1 Vibro-acoustic re-alignment with Alexis</li>
                <li>Shamanic Fire Ceremony</li>
                <li>Sacred Cacao Ceremony</li>
                <li>Seed Ritual</li>
                <li>Breath-work session</li>
                <li>Community & Connection</li>
                <li>Swag Bag full of high vibe goodies</li>
                <li>
                  All meals included and prepared by Emotional Eating
                  Nutritionist
                </li>
                <li>Retreat Sanctuary B&B Shared accommodation </li>
              </ul>
              <AnchorPrimary
                href="https://engage.squarespace-mail.com/r?m=645160b63ae4013dd604e4cc&u=https%3A%2F%2Fluminasoundandwellness.as.me%2FENLIGHTENEDHEARTRETREAT&w=5f862bbb5daaf71f955eb612&c=b_6430e88a4484a505db32e46d&e=2023-05-03T19%3A13%3A01.595469Z&l=en-US&s=NqwZHX7CoZuNMG-UYN49EvmDmSs%3D"
                target="_blank"
              >
                reserve your spot
              </AnchorPrimary>
            </div>
            <StaticImage
              src="../../images/heart-retreat.png"
              alt="heart retreat"
            />
          </Flex>
          <h3 className="center italics">
            $555 all inclusive - Space is Limited!
          </h3>
        </Container>
      </Section>
      <Wrapper>
        <Section>
          <Container className="spacing-lg">
            <h2 className="title bold accent caps center">
              MEET YOUR RETREAT HOSTS & SPECIAL GUEST FACILITATOR
            </h2>
            <div className="center">
              <StaticImage src="../../images/marie-heart.png" alt="marie" />
              <p className="bold">Hello My Name is Marie Bélanger</p>
              <p>
                I'm a Registered Massage Therapist, Embodiment Yoga Teacher™️,
                Holistic Healing and Energy Practitioner, Friendly Guide &
                Sacred Space Facilitator. My passion is to create safe healing
                experiences to help you regulate your nervous system and come
                home to your body. I’ve found my way to these practices through
                my own journey and healing from CPTSD & PTSD. It truly fills my
                heart to share these practices with you.♥
              </p>
            </div>
            <hr />
            <div className="center">
              <StaticImage src="../../images/alexis-heart.jpg" alt="marie" />
              <p className="bold">Hello, My Name is Alexis Johnston</p>
              <p>
                I'm a Certified Sound Healing Practitioner and take pride in
                providing supportive and inclusive environments in which
                positive change and healing can unfold. The use of technical
                knowledge and intuition help to inform the planning of each of
                my sessions, catering to the needs of the group or individual I
                am serving. A variety of techniques and instruments are used in
                my sessions; including crystal bowls, Tibetan bowls, drums,
                tingshas, tuning forks, chimes, mantra chanting, gongs,
                monochord, and more. I often weave aspects of astrology,
                meditation, journaling, Pranayama (breathing techniques),
                Mudras, and oracle readings into my sound offerings. Thank you
                for taking the time to read my story. I would be truly honoured
                to share this modality with you as you move through whatever
                path or journey you currently find yourself on.
              </p>
            </div>
            <hr />;
            <div className="center">
              <StaticImage src="../../images/joelle-heart.jpg" alt="marie" />
              <p className="bold">Hello, my name is Joëlle Page</p>
              <p>
                Pause Certified Breathwork Facilitator, Mind/body Eating Coach,
                Nutrition Coach With a background in self-love and recovery. My
                passion and calling is helping women change their “story” and
                remember their power. Through the power of the breath we can
                change our trajectory and re-write our destiny. Whether it’s
                virtual, in-person, 1:1, or group Breathwork, Emotional Eating
                workshops, sharing my passion for nourishing the soul with
                food+love, or sponsoring women in recovery- I treasure holding
                sacred space for women all over the globe.
              </p>
            </div>
          </Container>
        </Section>
        <center>
          ;
          <AnchorPrimary
            href="https://engage.squarespace-mail.com/r?m=645160b63ae4013dd604e4cc&u=https%3A%2F%2Fluminasoundandwellness.as.me%2FENLIGHTENEDHEARTRETREAT&w=5f862bbb5daaf71f955eb612&c=b_6430e88a4484a505db32e46d&e=2023-05-03T19%3A13%3A01.595469Z&l=en-US&s=NqwZHX7CoZuNMG-UYN49EvmDmSs%3D"
            target="_blank"
          >
            reserve your spot
          </AnchorPrimary>
        </center>
      </Wrapper>
      <hr />
    </Layout>
  )
}
