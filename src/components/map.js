import React from "react"
import styled from "styled-components"
import { Section, Container, Flex, FlexMobileOpp } from "./layoutComponents"

const Wrapper = styled.div`
  background: url("../images/map-bg.jpeg"), rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: var(--txt-light);
`

const MapFrame = styled.iframe`
  width: 100%;
  height: 450px;
  border: 0;
`

const Place = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--clr-accent);

  a {
    text-decoration: none;
    color: var(--txt-light);
  }
`

const Item = props => {
  return (
    <Place>
      <a href={props.link} target="_blank" className="upper bold">
        {props.location}
      </a>
      <a href={props.directions} target="_blank" className="bold">
        {props.distance}
      </a>
    </Place>
  )
}

export default function Map() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Flex>
            <div className="spacing">
              <h1 className="title caps bold">what's around?</h1>
              <p>
                Enjoy day trips to local attractions. The Misty Ridge Retreat
                Bed & Breakfast is centrally located to many nearby attractions.
                Below are only a few!
              </p>
              <p className="italics">
                Click on the location to view their website! Click on the drive
                distance to view directions!
              </p>
              <div className="spacing">
                <Item
                  link="https://www.calgarystampede.com/"
                  directions="https://www.google.com/maps/dir/Misty+Ridge+Retreat+B+and+B,+266+Avenue+West+Suite+1,+Alberta/Calgary+Stampede+Grandstand,+3+Street+Southeast,+Calgary,+AB/@50.9227956,-114.255855,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x5371a19378bfc117:0x4b1d3734f8cbca7a!2m2!1d-114.1811073!2d50.8121791!1m5!1m1!1s0x5371700f7591c801:0xd87aa6201101fa78!2m2!1d-114.0552444!2d51.0337389"
                  location="calgary stampede"
                  distance="40 min away"
                />
                <Item
                  link="https://www.sprucemeadows.com/"
                  directions="https://www.google.com/maps/dir/Misty+Ridge+Retreat+B+and+B,+266+Avenue+West+Suite+1,+Alberta/spruce+meadows/@50.8520951,-114.212203,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x5371a19378bfc117:0x4b1d3734f8cbca7a!2m2!1d-114.1811073!2d50.8121791!1m5!1m1!1s0x537170fcab09c1a9:0x5fe05f826dd82082!2m2!1d-114.1032193!2d50.8848327"
                  location="spruce meadows"
                  distance="10 min away"
                />
                <Item
                  link="https://leightoncentre.org/"
                  directions="https://www.google.com/maps/dir/Misty+Ridge+Retreat+B+and+B,+266+Avenue+West+Suite+1,+Alberta/leighton+art+center/@50.8039173,-114.2054865,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x5371a19378bfc117:0x4b1d3734f8cbca7a!2m2!1d-114.1811073!2d50.8121791!1m5!1m1!1s0x5371a0e133422233:0x2adab517b5373ccd!2m2!1d-114.2123565!2d50.7956657"
                  location="leighton art center"
                  distance="10 min away"
                />
                <Item
                  link="https://www.granaryroad.com/"
                  directions="https://www.google.com/maps/dir/Misty+Ridge+Retreat+B+and+B,+266+Avenue+West+Suite+1,+Alberta/Granary+Road+-+Farmer's+Market,+112+Street+West,+Calgary,+AB/@50.8284805,-114.1897567,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x5371a19378bfc117:0x4b1d3734f8cbca7a!2m2!1d-114.1811073!2d50.8121791!1m5!1m1!1s0x5371a000bbc991c1:0x1e53f303516737c3!2m2!1d-114.163404!2d50.8449437"
                  location="granary road market"
                  distance="10 min away"
                />
                <Item
                  link="https://www.albertaparks.ca/parks/kananaskis/kananaskis-country/"
                  directions="https://www.google.com/maps/dir/Misty+Ridge+Retreat+B+and+B,+266+Avenue+West+Suite+1,+Alberta/Kananaskis,+AB/@50.986841,-114.9049914,10z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x5371a19378bfc117:0x4b1d3734f8cbca7a!2m2!1d-114.1811073!2d50.8121791!1m5!1m1!1s0x5370dbf8317dea0f:0xda985d813d38ea08!2m2!1d-115.1288004!2d51.0763355"
                  location="kananaskis country"
                  distance="45 min away"
                />
                <Item
                  link="https://www.banfflakelouise.com/"
                  directions="https://www.google.com/maps/dir/Misty+Ridge+Retreat+B+and+B,+266+Avenue+West+Suite+1,+Alberta/Banff,+AB/@50.986841,-114.9049914,10z/data=!4m13!4m12!1m5!1m1!1s0x5371a19378bfc117:0x4b1d3734f8cbca7a!2m2!1d-114.1811073!2d50.8121791!1m5!1m1!1s0x5370ca45910c4afd:0xcaafaebedaac9463!2m2!1d-115.5708074!2d51.1783972"
                  location="banff national park"
                  distance="90 min away"
                />
              </div>
            </div>
            <MapFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.0248065720525!2d-114.18329598425548!3d50.81217907952695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371a19378bfc117%3A0x4b1d3734f8cbca7a!2sMisty%20Ridge%20Retreat%20B%20and%20B!5e0!3m2!1sen!2sca!4v1654554013822!5m2!1sen!2sca"
              allowFullScreen
              loading="lazy"
            />
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  )
}
