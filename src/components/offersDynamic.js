import React from "react"
import styled from "styled-components"
import { Container, Section, Flex } from "./layoutComponents"
import { ButtonPrimary } from "./buttons"
import '../styles/blogs.css'

const Offer = styled.div`
  box-shadow: var(--shadow-light-accent);
`
const Text = styled.div`
  padding: 2em 2em 2em 0;

  @media screen and (max-width: 48em) {
    padding-left: 2em;
  }
`

const Review = styled.div``

export default function OffersDynamic({ datas }) {

    console.log(datas,'vksdko')
  return (
    <Section>
      <Container className="spacing">
        <h2 className="title accent bold caps">Events</h2>
        <div className="spacing">
          {datas?.map((data ) => {
            return (
              <Offer>
                <Flex>
                  <div className="imageContainer">
                 <img src={data?.thumbnail?.url} alt='image'
                  style={{width : '100%' , height:'auto' , maxWidth : '495px' , objectFit : 'cover'}}
                  />
                  </div>
                  <Text className="spacing">
                    <h3 className="heading bold caps">{data?.title}</h3>
                    <Review>
                      <p className="italics">
                        "Misty Ridge was the perfect venue for our small
                        wedding! Allen and Kathryn were gracious hosts who made
                        every effort to make our family feel at home and create
                        the right vibe for our special day. The venue features
                        very comfortable themed rooms (nice beds!), spa-like
                        bathrooms, absolutely stunning scenery and walking
                        trails, an abundance of outdoor gathering spaces, and
                        the truly magical “Turtle Hill” where our ceremony was
                        held." <br /> ~ Luke Rosewood
                      </p>
                    </Review>
                    <ButtonPrimary to={`/events/${data?.slug}`}>
                      learn more
                    </ButtonPrimary>
                  </Text>
                </Flex>
              </Offer>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
