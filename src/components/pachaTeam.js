import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, Flex } from "./layoutComponents"
import { ButtonPrimary } from "./buttons"

const MainP = styled.p`
  font-size: var(--fs-sm);
`

export default function Team() {
  return (
    <Section>
      <Container className="spacing">
        <div>
          <p className="upper accent italics">
            licensed holistic practicioners
          </p>
          <h2 className="title--bold">
            meet our registered massage therapists
          </h2>
        </div>
        <div className="spacing-lg">
          <Flex>
            <StaticImage
              src="../images/pacha-kathryn-kessler-calgary-rmt.jpg"
              alt="kathryn kessler calgary rmt"
              className="stretch"
            />
            <div className="spacing">
              <div>
                <h3 className="body--large upper bold">kathryn kessler</h3>
              </div>
              <MainP>
                I am Kathryn Kessler, a Registered Massage Therapist
                specializing in therapeutic relaxation massage with the added
                benefit of sound vibration therapy. I have been interested in
                massage for 29 years, since my first son was born. During his
                bath time routine, I would massage lotion on him after his bath,
                noticing the impact it had on his overall well-being. That was
                the beginning of my journey to helping others heal. I offer
                sound vibration therapy in conjunction with therapeutic
                relaxation massage. By combining the massage with the vibrations
                of sound, you are essentially massaged from the inside out. You
                can read more about the benefits of each of these healing
                methods here. My certifications include the MRU Diploma in
                Massage Therapy (2200 Hours) and CranioSacral Therapy Level 3. I
                find helping support someone’s healing deeply fulfilling. It is
                immensely satisfying helping someone to feel better. It amazes
                me how a body can suffer an injury, strain or trauma and after
                5-6 massage and sound vibration sessions, the body is 90%
                healed, the person is feeling better and more relaxed. My
                absolute favourite part of doing this work is watching my
                clients walk out of my office with a dreamy, sleepy look. That’s
                when I know that I have taken them from fight & flight to rest &
                digest, and their body is beginning to heal.
              </MainP>
            </div>
          </Flex>
          <Flex>
            <StaticImage
              src="../images/pacha-marie-calgary-rmt.jpg"
              alt="MARIE BÉLANGER calgary rmt"
              className="stretch"
            />
            <div className="spacing">
              <h3 className="body--large upper bold">marie Bélanger </h3>
              <MainP>
                My name is Marie, and I’m a Licensed Holistic Practitioner a
                2200hr Registered Massage Therapist, a Mom, life partner,
                sister, friend, health and wellness facilitator, yoga teacher,
                retreat host, flight attendant and so much more. My journey in
                the Natural and Holistic practices started in 2014 after a
                heartbreaking and eye opening diagnosis of PTSD. Years of
                constant stress, suppressed and overlooked trauma took its toll,
                not only on my mind but also my body. Exhausting all options in
                traditional Western medicine I turned to a Holistic approach.
                Through my own healing I have been humbled and I know it is my
                purpose to share the wisdom I’ve gained through my experiences
                and provide support for those facing adversity. My passion is to
                work WITH you and offer a variety of modalities for your healing
                and wellness. My offerings included; Massage Therapy (ACMT), The
                Healing Touch (Verna Besselink), BodyTalk (Allison Bachmeire),
                Usui Reiki Master, RainDrop Therapy (Joni Brestler), Sound
                Healing (Life changing energy), Akashic record readings (Linda
                Howe), Wellness retreats, Sacred Cacao Ceremonies (Embue Cacao,
                “Into the Heart”), and intuitive guidance. I have also completed
                a 200hr Embodiment Yoga™ Teacher training with Mandorla Yoga
                Institute and am honoured to guide you in your personal practice
                and encourage you to come home to yourself experiencing the
                richness of living embodied. It is with gratitude that I empower
                you to trust your intuition and natural abilities for your
                healing, and wellness. I thank you for your trust in me to
                honour you, and for allowing yourself to embark on this journey.
                I believe in you, and YOU ARE WORTH IT!! ~I will meet you right
                where you are. I offer you my hand, it is up to you to take the
                first step.~ MB
              </MainP>
            </div>
          </Flex>
        </div>
      </Container>
    </Section>
  )
}
