import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section, Container } from "./layoutComponents"
import { ButtonSecondary } from "./buttons"

const Text = styled.div`
  padding: 0 2em 3em;
`

const Item = styled.div`
  text-align: center;
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
`

const ImageWrapper = styled.div`
  height: 300px;
  overflow: hidden;
  
  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
  }
  
  .gatsby-image-wrapper img {
    object-fit: cover;
    object-position: center;
  }
`

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const DropdownContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`

const DropdownContent = styled.div`
  max-height: ${props => props.isOpen ? '600px' : '0'};
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
  padding: ${props => props.isOpen ? '1rem' : '0 1rem'};
  background-color: #f8f9fa;
  border-radius: var(--br);
  margin-top: 0.5rem;
  border: ${props => props.isOpen ? '1px solid #dee2e6' : '1px solid transparent'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.3s ease-in-out;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
`

// Custom button for dropdowns that looks like ButtonSecondary
const DropdownButton = styled.button`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;
  background: transparent;
  color: var(--clr-accent);
  border: 1px solid var(--clr-accent);
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
  }
`

// Custom button for Book Now that looks like ButtonPrimary
const BookNowButton = styled.button`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.25s linear;
  background: var(--clr-accent);
  color: var(--txt-light);
  border: 1px solid var(--clr-accent);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;

  &:hover {
    background: var(--clr-accent-darker);
    color: var(--txt-light);
  }
`

export default function Treatments() {
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index)
  }

  const scrollToCalendar = () => {
    const calendarElement = document.getElementById('calendar')
    if (calendarElement) {
      calendarElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      // Fallback: scroll to bottom of page if no calendar element found
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
  }

  const treatmentData = [
    {
      alt: "massage and sound therapy calgary",
      title: "massage & sound therapy",
      description: "Combining skillful massage technique with sound therapy to leave you feeling tension free, relaxed, and revitalized.",
      details: {
        title: "Massage & Sound Therapy Details:",
        description: "Therapeutic massage relieves trigger points within muscle tissue, helps to breakdown adhesions from overuse or injury, reduces pain and returns the tissues to normal function. Specializing in relaxation massage Calgary, we help increase circulation of the lymphatic system and blood systems, which helps to remove metabolic waste from muscles. As is implied in the names, it also relaxes your mind and allows you to distress. The use of these two modalities helps each client to achieve healing, improved movement, improved circulation and a peaceful, relaxed body, mind and soul.",
        benefits: "Improved immunity, Increased circulation to sore and tires muscles to improve muscle function, Restful sleep, Decreased pain, Decrease severity and frequency of tension headaches, Improved posture and counteraction of the imbalances from sitting for hours at a computer"
      }
    },
    {
      alt: "craniosacral massage therapy calgary",
      title: "craniosacral therapy",
      description: "Using a gentle touch and manipulating the skull to release tension deep in the body and relieve pain and dysfunction while improving general health.",
      details: {
        title: "Craniosacral Therapy Details:",
        description: "Our Craniosacral massage Calgary therapy is a gentle form of therapy that releases tensions deep in the body to relieve pain and dysfunction and improve general health. Using a very gentle touch, our practitioners release restrictions in the soft tissues that surround the central nervous system.",
        benefits: "Many of the benifits of therapeutic relaxation + an impact on many disorders and health conditions"
      }
    },
    {
      alt: "distance healing & reiki",
      title: "distance healing & reiki",
      description: "Helping you address and acknowledge areas of your body that are giving you issues to find a resolution for long-lasting or permanent healing.",
      details: {
        title: "Distance Healing & Reiki Details:",
        description: "Simply put, our reiki calgary services is a healing technique that involves our therapists chanelling energy into our patients by a means of touch. Similar to massage, this process activates the natural healing process within one’s body, mind, and soul to restore both physical and emotional well-being. There is a vital form of energy that flows through your body. As your Calgary reiki practitioner, it is our responsibility to use a gentle touch, or to place our hands just above your body, to guide this energy throughout your body in a way that promotes healing. During your Calgary reiki healing session, you will lay flat on our reiki massage table to allow us to place our hands over your body in order to transfer our energy to you, and guide it to the right places to encourage the natural healing process.",
        benefits: "Can be done as a distance session if desired, virtually over zoom"
      }
    },
    {
      alt: "hot stone massage calgary",
      title: "hot stone massage",
      description: "Hot Stone Massage is an ancient treatment that offers heat to the muscles by way of a warmed smooth stone massaged into the area.",
      details: {
        title: "Hot Stone Massage Details:",
        description: "Pacha Mamma Massage & Sound Therapy now offers the amazing, relaxing and soothing treatment of hot stone massage Calgary (also known as hot rock massage). Hot Stone therapy is an ancient treatment that offers heat to the muscles by way of a warmed smooth stone massaged into the area. The therapist uses warmed flat and smooth Basalt stones. Each stone is placed on strategic areas of your body to help your muscles relax and warm the area. The therapist then massages with the stones to increase relaxation and alleviate muscle tension.",
        duration: "60-90 minutes",
        benefits: "Helps relieve muscle tension, Improved flexibility & mobility, Reduces stress and anxiety Helps to promote sleep, May reduce symptoms of Fibromyalgia pain or chronic pain, May boost immunity, Improved circulation"
      }
    }
  ]

  return (
    <Section>
      <Container className="spacing">
        <center>
          <p className="upper accent italics">
            surpassing your massage expectations
          </p>
          <h2 className="title--bold">
            tailored treatments to meet your needs
          </h2>
        </center>
        <TwoColumnGrid>
          <Item className="spacing">
            <ImageWrapper>
              <StaticImage
                src="../images/pacha-massage-therapy-calgary.jpg"
                alt="massage and sound therapy calgary"
                height={300}
                placeholder="blurred"
              />
            </ImageWrapper>
            <Text className="spacing">
              <h3 className="body--large upper accent">
                {treatmentData[0].title}
              </h3>
              <p>{treatmentData[0].description}</p>

              <DropdownContainer>
                <DropdownButton onClick={() => toggleDropdown(0)}>
                  {openDropdown === 0 ? 'hide details' : 'learn more'}
                </DropdownButton>
                <DropdownContent isOpen={openDropdown === 0}>
                  <p><strong>{treatmentData[0].details.title}</strong></p>
                  <p>{treatmentData[0].details.description}</p>
                  <p><strong>Benefits:</strong> {treatmentData[0].details.benefits}</p>
                  
                  <ButtonContainer>
                    <BookNowButton onClick={scrollToCalendar}>
                      Book Now
                    </BookNowButton>
                  </ButtonContainer>
                </DropdownContent>
              </DropdownContainer>
            </Text>
          </Item>

          <Item className="spacing">
            <ImageWrapper>
              <StaticImage
                src="../images/pacha-craniosacral-massage-calgary.jpg"
                alt="craniosacral massage therapy calgary"
                height={300}
                placeholder="blurred"
              />
            </ImageWrapper>
            <Text className="spacing">
              <h3 className="body--large upper accent">
                {treatmentData[1].title}
              </h3>
              <p>{treatmentData[1].description}</p>

              <DropdownContainer>
                <DropdownButton onClick={() => toggleDropdown(1)}>
                  {openDropdown === 1 ? 'hide details' : 'learn more'}
                </DropdownButton>
                <DropdownContent isOpen={openDropdown === 1}>
                  <p><strong>{treatmentData[1].details.title}</strong></p>
                  <p>{treatmentData[1].details.description}</p>
                  <p><strong>Benefits:</strong> {treatmentData[1].details.benefits}</p>
                  
                  <ButtonContainer>
                    <BookNowButton onClick={scrollToCalendar}>
                      Book Now
                    </BookNowButton>
                  </ButtonContainer>
                </DropdownContent>
              </DropdownContainer>
            </Text>
          </Item>

          <Item className="spacing">
            <ImageWrapper>
              <StaticImage
                src="../images/pacha-reiki-calgary-healing-session.jpg"
                alt="distance healing & reiki"
                height={300}
                placeholder="blurred"
              />
            </ImageWrapper>
            <Text className="spacing">
              <h3 className="body--large upper accent">
                {treatmentData[2].title}
              </h3>
              <p>{treatmentData[2].description}</p>

              <DropdownContainer>
                <DropdownButton onClick={() => toggleDropdown(2)}>
                  {openDropdown === 2 ? 'hide details' : 'learn more'}
                </DropdownButton>
                <DropdownContent isOpen={openDropdown === 2}>
                  <p><strong>{treatmentData[2].details.title}</strong></p>
                  <p>{treatmentData[2].details.description}</p>
                  <p><strong>Benefits:</strong> {treatmentData[2].details.benefits}</p>
                  
                  <ButtonContainer>
                    <BookNowButton onClick={scrollToCalendar}>
                      Book Now
                    </BookNowButton>
                  </ButtonContainer>
                </DropdownContent>
              </DropdownContainer>
            </Text>
          </Item>

          <Item className="spacing">
            <ImageWrapper>
              <StaticImage
                src="../images/pacha-hot-stone-massage-calgary.jpg"
                alt="hot stone massage calgary"
                height={300}
                placeholder="blurred"
              />
            </ImageWrapper>
            <Text className="spacing">
              <h3 className="body--large upper accent">
                {treatmentData[3].title}
              </h3>
              <p>{treatmentData[3].description}</p>

              <DropdownContainer>
                <DropdownButton onClick={() => toggleDropdown(3)}>
                  {openDropdown === 3 ? 'hide details' : 'learn more'}
                </DropdownButton>
                <DropdownContent isOpen={openDropdown === 3}>
                  <p><strong>{treatmentData[3].details.title}</strong></p>
                  <p>{treatmentData[3].details.description}</p>
                  <p><strong>Benefits:</strong> {treatmentData[3].details.benefits}</p>
                  
                  <ButtonContainer>
                    <BookNowButton onClick={scrollToCalendar}>
                      Book Now
                    </BookNowButton>
                  </ButtonContainer>
                </DropdownContent>
              </DropdownContainer>
            </Text>
          </Item>
        </TwoColumnGrid>
      </Container>
    </Section>
  )
}
