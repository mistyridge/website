import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ButtonSecondary } from "../components/buttons"
import { Label, Input, Submit } from "../components/forms/formItems"
import {
  Container,
  GridAuto,
  GridTwo,
  Section,
} from "../components/layoutComponents"

const Hero = styled.section`
  padding: 5em 0;
  background: linear-gradient(
    180deg,
    rgba(255, 248, 220, 0.78),
    rgba(255, 255, 255, 0.98)
  );
  border-top: 4px solid #d8b154;
  color: #18130b;
`

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.9fr;
  gap: 2em;
  align-items: start;

  @media screen and (max-width: 56em) {
    grid-template-columns: 1fr;
  }
`

const HeroCopy = styled.div`
  max-width: 38rem;
`

const HeroIntro = styled.p`
  max-width: 34rem;
`

const HeroCtaBand = styled.div`
  margin-top: 2rem;
`

const HeroAside = styled.div`
  display: block;
`

const Eyebrow = styled.div`
  display: inline-block;
  margin-bottom: 1.25em;
  padding: 0.55em 1em;
  border-left: 4px solid #d8b154;
  background: rgba(255, 248, 220, 0.9);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

const PosterWrap = styled.div`
  padding: 1em;
  background: #fff;
  border-top: 4px solid #d8b154;
  box-shadow: var(--shadow-light);

  .gatsby-image-wrapper {
    border-radius: 4px;
    overflow: hidden;
  }
`

const Card = styled.div`
  height: 100%;
  padding: 1.8em;
  border-radius: 4px;
  background: #fff;
  box-shadow: var(--shadow-light);
  border-top: 4px solid #d8b154;
`

const AltSection = styled(Section)`
  background: #f9f7f2;
`

const SignupShell = styled.div`
  padding: 2em;
  border-radius: 4px;
  color: #fff8dc;
  background: #1f1a14;
  border-top: 4px solid #d8b154;
  box-shadow: var(--shadow-light);
`

const SignupLead = styled.div`
  max-width: 38rem;
`

const HeroSignupCard = styled.div`
  padding: 1.5em;
  border-radius: 4px;
  background: #1f1a14;
  color: #fff8dc;
  border-top: 4px solid #d8b154;
  box-shadow: var(--shadow-light);
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 1.5rem 2rem;
  align-items: start;

  @media screen and (max-width: 56em) {
    grid-template-columns: 1fr;
  }

  p {
    color: rgba(255, 248, 220, 0.78);
  }
`

const HeroSignupIntro = styled.div`
  max-width: 28rem;
`

const SignupCard = styled.div`
  margin-top: 1.5em;
  padding: 1.5em;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 248, 220, 0.16);
`

const SignupForm = styled.form`
  .clear {
    margin-top: 1.5rem;
  }
`

const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media screen and (max-width: 48em) {
    grid-template-columns: 1fr;
  }
`

const FormLabel = styled(Label)`
  margin-bottom: 0.5rem;
  color: #fff8dc;
`

const FormInput = styled(Input)`
  background: #fff;
  border-color: rgba(255, 248, 220, 0.32);
  color: #18130b;

  &::placeholder {
    color: rgba(24, 19, 11, 0.6);
  }

  &:focus {
    outline: 1px solid #fff8dc;
    border-color: #fff8dc;
  }
`

const FormSubmit = styled(Submit)`
  border-radius: 4px;
`

const FormMeta = styled.div`
  color: rgba(255, 248, 220, 0.78);

  p {
    font-size: var(--fs-sm);
  }
`

const HiddenTrap = styled.div`
  position: absolute;
  left: -5000px;
`

const Required = styled.span`
  color: #eed89a;
`

function MailchimpSignupForm({ idPrefix, submitLabel }) {
  return (
    <SignupForm
      action="https://mistyridgeretreatbandb.us21.list-manage.com/subscribe/post?u=1232eb8d54489e327b04f9c80&amp;id=030f658792&amp;f_id=00cc9ce6f0"
      className="validate spacing"
      id={`${idPrefix}-subscribe-form`}
      method="post"
      name={`${idPrefix}-subscribe-form`}
      target="_blank"
    >
      <FieldGrid>
        <div className="spacing-sm mc-field-group">
          <FormLabel htmlFor={`${idPrefix}-FNAME`}>First Name</FormLabel>
          <FormInput
            className="text"
            id={`${idPrefix}-FNAME`}
            name="FNAME"
            type="text"
          />
        </div>
        <div className="spacing-sm mc-field-group">
          <FormLabel htmlFor={`${idPrefix}-LNAME`}>Last Name</FormLabel>
          <FormInput
            className="text"
            id={`${idPrefix}-LNAME`}
            name="LNAME"
            type="text"
          />
        </div>
      </FieldGrid>

      <div className="spacing-sm mc-field-group">
        <FormLabel htmlFor={`${idPrefix}-EMAIL`}>
          Email Address <Required>*</Required>
        </FormLabel>
        <FormInput
          className="required email"
          id={`${idPrefix}-EMAIL`}
          name="EMAIL"
          placeholder="Enter your email address"
          required
          type="email"
        />
      </div>

      <div hidden>
        <input name="tags" type="hidden" value="3018454" />
      </div>

      <div className="clear" id={`${idPrefix}-responses`}>
        <div
          className="response"
          id={`${idPrefix}-error-response`}
          style={{ display: "none" }}
        ></div>
        <div
          className="response"
          id={`${idPrefix}-success-response`}
          style={{ display: "none" }}
        ></div>
      </div>

      <HiddenTrap aria-hidden="true">
        <input
          name="b_1232eb8d54489e327b04f9c80_030f658792"
          tabIndex="-1"
          type="text"
          value=""
          readOnly
        />
      </HiddenTrap>

      <div className="clear">
        <FormSubmit
          className="button"
          id={`${idPrefix}-subscribe`}
          name="subscribe"
          type="submit"
          value={submitLabel}
        />
      </div>
    </SignupForm>
  )
}

const lineup = [
  { time: "3:00 PM", artist: "Jed & The Valentine" },
  { time: "6:00 PM", artist: "Aline Deanna" },
  { time: "9:00 PM", artist: "Calum Graham" },
]

export default function SolsticeMusicCelebration() {
  return (
    <Layout>
      <SEO
        title="Solstice Music Celebration"
        description="A private invitation-only music celebration at Misty Ridge Retreat B&B on Saturday, June 13, 2026."
        noindex
        loadPortableSearchBar={false}
      />

      <Hero>
        <Container>
          <HeroGrid>
            <div className="spacing">
              <HeroCopy className="spacing">
                <Eyebrow>Private Event · Invitation Only</Eyebrow>
                <h1 className="title--bold upper">
                  Solstice Music Celebration
                </h1>
                <HeroIntro className="body--large">
                  Join us at Misty Ridge Retreat B&amp;B on Saturday, June 13,
                  2026 for a private afternoon and evening of live music, local
                  food, and relaxation in the foothills.
                </HeroIntro>
                <p>
                  Three featured performers, local food, and a relaxed retreat
                  setting come together for one invitation-only summer
                  celebration.
                </p>
                <div>
                  <ButtonSecondary to="#event-details">
                    view event details
                  </ButtonSecondary>
                </div>
              </HeroCopy>
            </div>
            <HeroAside>
              <PosterWrap>
                <StaticImage
                  src="../images/solstice-music-celebration.jpg"
                  alt="Solstice Music Celebration event poster"
                  placeholder="blurred"
                />
              </PosterWrap>
            </HeroAside>
          </HeroGrid>
          <HeroCtaBand>
            <HeroSignupCard id="hero-signup">
              <HeroSignupIntro className="spacing">
                <p className="body--small upper light">Get your invitation</p>
                <h2 className="heading bold caps">Join the guest list</h2>
                <p>
                  Sign up now to receive your formal invitation and event
                  details by email.
                </p>
              </HeroSignupIntro>
              <div>
                <MailchimpSignupForm
                  idPrefix="hero-mc"
                  submitLabel="join the mailing list"
                />
              </div>
            </HeroSignupCard>
          </HeroCtaBand>
        </Container>
      </Hero>

      <AltSection id="event-details">
        <Container className="spacing-lg">
          <div className="spacing center">
            <h2 className="title bold caps">
              A summer gathering at Misty Ridge
            </h2>
            <p>
              Enjoy an invitation-only gathering designed around live music,
              local food, and a relaxed foothills atmosphere at Misty Ridge
              Retreat B&amp;B.
            </p>
          </div>
          <GridAuto>
            <Card>
              <strong>Date &amp; Time</strong>
              <p>Saturday, June 13, 2:00PM–11:00PM</p>
            </Card>
            <Card>
              <strong>Hosted At</strong>
              <p>Misty Ridge Retreat B&amp;B</p>
            </Card>
            <Card>
              <strong>Guest Count</strong>
              <p>Approximately 100 invited guests</p>
            </Card>
          </GridAuto>
          <GridAuto>
            <Card>
              <h3 className="heading bold caps">Live music</h3>
              <p>
                Three featured sets guide the day from afternoon into evening.
              </p>
            </Card>
            <Card>
              <h3 className="heading bold caps">Local food</h3>
              <p>
                Curated food and drink offerings keep the event generous and
                relaxed.
              </p>
            </Card>
            <Card>
              <h3 className="heading bold caps">Retreat atmosphere</h3>
              <p>
                The foothills setting gives the celebration space to breathe.
              </p>
            </Card>
          </GridAuto>
        </Container>
      </AltSection>

      <Section>
        <Container className="spacing-lg">
          <div className="spacing center">
            <h2 className="title bold caps">Music schedule</h2>
            <p>A lineup of great performers for a memorable evening.</p>
          </div>
          <GridAuto>
            {lineup.map(item => (
              <Card key={item.time}>
                <p className="body--small accent bold upper">{item.time}</p>
                <h3 className="heading bold caps">{item.artist}</h3>
              </Card>
            ))}
          </GridAuto>
        </Container>
      </Section>

      <AltSection>
        <Container className="spacing-lg">
          <div className="spacing center">
            <h2 className="title bold caps">Food &amp; refreshments</h2>
          </div>
          <GridTwo>
            <Card>
              <h3 className="heading bold caps">Food &amp; bar service</h3>
              <p>
                Catering by <strong>Sweetgrass Deli &amp; Eatery</strong> and
                bar service by <strong>Lucky Mobile Bar</strong> will be
                available for purchase throughout the event.
              </p>
            </Card>
            <Card>
              <h3 className="heading bold caps">Food &amp; beverage policy</h3>
              <p>
                Food and beverage will be available for purchase. Please do not
                bring outside food or beverage to the event.
              </p>
            </Card>
          </GridTwo>
        </Container>
      </AltSection>

      <AltSection>
        <Container className="spacing-lg">
          <div className="spacing center">
            <h2 className="title bold caps">
              Hosted at Misty Ridge Retreat B&amp;B
            </h2>
          </div>
          <GridTwo>
            <Card>
              <h3 className="heading bold caps">Why the setting matters</h3>
              <p>
                The location helps the event feel distinct: welcoming, scenic,
                and well suited to music, food, and conversation.
              </p>
            </Card>
            <Card>
              <h3 className="heading bold caps">Event details</h3>
              <p>
                Additional arrival, parking, and booking details can be shared
                with invited guests as the event information is finalized.
              </p>
            </Card>
          </GridTwo>
        </Container>
      </AltSection>

      <Section id="invitation-signup">
        <Container>
          <SignupShell>
            <SignupLead className="spacing">
              <h2 className="title bold caps">
                Join the mailing list to receive your formal invitation
              </h2>
              <p>
                Attendance is by invitation. Join the guest list to receive your
                formal invitation and event details by email.
              </p>
            </SignupLead>
            <SignupCard>
              <p className="body--small upper light">
                Solstice 2026 guest list
              </p>
              <MailchimpSignupForm
                idPrefix="main-mc"
                submitLabel="join the mailing list"
              />

              <FormMeta className="spacing-sm">
                <p>
                  After you subscribe, Mailchimp will open a confirmation step
                  in a new tab and add you to the Solstice guest list.
                </p>
                <p>
                  You&apos;ll receive your formal invitation and follow-up event
                  details by email.
                </p>
              </FormMeta>
            </SignupCard>
          </SignupShell>
        </Container>
      </Section>
    </Layout>
  )
}
