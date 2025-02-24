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

export default function OffersDynamic({tag ,title, datas }) {

    console.log(datas,'vksdko')
  return (
    <Section>
      <Container className="spacing">
        <h2 className="title accent bold caps">{title}</h2>
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
                        Click below to learn more.
                      </p>
                    </Review>
                    <ButtonPrimary to={`/${tag}/${data?.slug}`}>
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
