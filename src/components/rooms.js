import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section, Container, Flex, GridTwo } from "./layoutComponents"
import { AnchorOutline } from "./buttons"
import {
  FaBed,
  FaBath,
  FaUserFriends,
  FaWifi,
  FaTv,
  FaSpa,
} from "react-icons/fa"

const GridFull = styled.div`
  display: grid;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 2em;

  @media screen and (max-width: 54em) {
    grid-template-columns: 1fr;
  }
`

const Item = styled.div`
  box-shadow: var(--shadow-light-accent);
  border-radius: var(--br);
  padding: 2em;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    width: 100%;
    text-align: center;
  }

  p {
    color: var(--txt-dark-secondary);
  }
`

const RoomInfo = styled.div``

const FontStyle = {
  fontSize: "25px",
  color: "var(--clr-accent)",
}

const ImgStyle = {
  height: "100%",
}

const InclusivesAmmentities = () => {
  return (
    <Flex className="spacing">
      <div>
        <p className="bold caps">inclusives</p>
        <div>
          <p className="caps">
            {" "}
            <FaUserFriends style={FontStyle} /> 2 guests
          </p>
          <p className="caps">
            {" "}
            <FaBath style={FontStyle} /> 1 bathroom
          </p>
          <p className="caps">
            {" "}
            <FaBed style={FontStyle} /> 1 king bed
          </p>
        </div>
      </div>
      <div>
        <p className="bold caps">amentities</p>
        <div>
          <p className="caps">
            {" "}
            <FaWifi style={FontStyle} /> Internet & Office
          </p>
          <p className="caps">
            {" "}
            <FaTv style={FontStyle} /> Satellite TV
          </p>
          <p className="caps">
            {" "}
            <FaSpa style={FontStyle} /> Hair Dryer & Towel-set
          </p>
        </div>
      </div>
    </Flex>
  )
}

export default function Rooms() {
  return (
    <Section>
      <Container className="spacing">
        <h2 className="title caps bold accent">rooms & suites</h2>
        <p>
          We offer cozy spa-like beds and bathrooms that you won’t want to
          leave! Our amentities in each room will help you relax even more,
          especially on your Dreameasy adjustable bed for maximum comfort that
          will put you into a deep sleep.
        </p>
        <GridFull>
          <GridTwo>
            <Item className="spacing">
              <p className="bold caps body--large">Jaguar/Otorongo Room</p>
              <StaticImage
                src="../images/jaguar-bed-and-breakfast-suite.jpg"
                alt="calgary b&b suite"
              />
              <p>
                Lower level, with private walk out to sitting area next to hot
                tub, views of nature and city skyline.
              </p>
              <ButtonWrapper>
                <AnchorOutline
                  href="https://checkout.lodgify.com/kathryn-kessler/en/?currency=CAD#/231709"
                  target="_blank"
                >
                  book this room now
                </AnchorOutline>
                <p>
                  2+ nights: <span className="bold">$140</span> per night <br />
                  1 night: <span className="bold">$190</span> per night
                </p>
              </ButtonWrapper>
            </Item>
            <Item className="spacing">
              <p className="bold caps body--large">
                Hummingbird/Sewar Kenti Room
              </p>
              <StaticImage
                src="../images/hummingbird-bed-and-breakfast-suite.jpg"
                alt="calgary b&b suite"
                width={400}
              />
              <p>
                Lower level with large window views of rolling foothills, nature
                and city skyline.
              </p>
              <ButtonWrapper>
                <AnchorOutline
                  href="https://checkout.lodgify.com/kathryn-kessler/en/?currency=CAD#/231709"
                  target="_blank"
                >
                  book this room now
                </AnchorOutline>
                <p>
                  2+ nights: <span className="bold">$140</span> per night <br />
                  1 night: <span className="bold">$190</span> per night
                </p>
              </ButtonWrapper>
            </Item>
            <Item className="spacing">
              <p className="bold caps body--large">Deer/Sachamama Room</p>
              <StaticImage
                src="../images/deer-bed-and-breakfast-suite.jpg"
                alt="calgary b&b suite"
              />
              <p>
                Lower level, will accommodate a family of 3. Please contact
                owner for arrangements.
              </p>
              <ButtonWrapper>
                <AnchorOutline
                  href="https://checkout.lodgify.com/kathryn-kessler/en/?currency=CAD#/231709"
                  target="_blank"
                >
                  book this room now
                </AnchorOutline>
                <p>
                  2+ nights: <span className="bold">$140</span> per night <br />
                  1 night: <span className="bold">$190</span> per night
                </p>
              </ButtonWrapper>
            </Item>
            <Item className="spacing">
              <div className="spacing">
                <p className="bold caps body--large">Eagle/Piita Room</p>
                <StaticImage
                  src="../images/eagle-bed-and-breakfast-suite.jpg"
                  alt="calgary b&b suite"
                />
                <p>
                  Main level, with large window views of the rolling foothills,
                  nature and city skyline.
                </p>
              </div>
              <ButtonWrapper>
                <AnchorOutline
                  href="https://checkout.lodgify.com/kathryn-kessler/en/?currency=CAD#/231709"
                  target="_blank"
                >
                  book this room now
                </AnchorOutline>
                <p>
                  2+ nights: <span className="bold">$140</span> per night <br />
                  1 night: <span className="bold">$190</span> per night
                </p>
              </ButtonWrapper>
            </Item>
          </GridTwo>
          <RoomInfo className="spacing">
            <div>
              <p className="bold caps">room inclusives</p>
              <div>
                <p className="caps">
                  {" "}
                  <FaUserFriends style={FontStyle} /> Each room fits 2 guests
                </p>
                <p className="caps">
                  {" "}
                  <FaBath style={FontStyle} /> 1 bathroom per room
                </p>
                <p className="caps">
                  {" "}
                  <FaBed style={FontStyle} /> 1 king bed per room
                </p>
              </div>
            </div>
            <div>
              <p className="bold caps">room amentities</p>
              <div>
                <p className="caps">
                  {" "}
                  <FaWifi style={FontStyle} /> Internet & Office
                </p>
                <p className="caps">
                  {" "}
                  <FaTv style={FontStyle} /> Satellite TV
                </p>
                <p className="caps">
                  {" "}
                  <FaSpa style={FontStyle} /> Hair Dryer & Towel-set
                </p>
              </div>
            </div>
          </RoomInfo>
        </GridFull>
      </Container>
    </Section>
  )
}
