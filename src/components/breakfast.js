import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section, Container, GridAuto } from "./layoutComponents"
import { ButtonSecondary } from "./buttons"
import { FaUtensils } from "react-icons/fa"
import Review from "./review"

const Flex = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 48em) {
    flex-direction: column;
  }
`
const FlexMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Dietary = styled.div`
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  padding: 2em;
`

const ImgStyle = {
  height: "100%",
  width: "100%",
}

const FontStyle = {
  fontSize: "25px",
  color: "var(--clr-accent)",
}

const Breakfast = () => {
  return (
    <Section className="spacing">
      <Container className="spacing">
        <h2 className="title caps accent bold center">
          fresh breakfast included
        </h2>
        <Flex>
          <StaticImage
            src="../images/food/fresh-breakfast-calgary-bb-1.jpeg"
            alt="fresh breakfast included at calgary b&b"
            className=""
            style={ImgStyle}
          />
          <StaticImage
            src="../images/food/fresh-breakfast-calgary-bb-2.jpeg"
            alt="fresh breakfast included at calgary bed and breakfast"
            className=""
            style={ImgStyle}
          />
        </Flex>

        {/* <div className="spacing">
          <GridAuto>
            <FlexMenu>
              <FaUtensils style={FontStyle} />
              <p className="bold caps">Egg Caserole</p>
            </FlexMenu>
            <FlexMenu>
              <FaUtensils style={FontStyle} />
              <p className="bold caps">french toast</p>
            </FlexMenu>
            <FlexMenu>
              <FaUtensils style={FontStyle} />
              <p className="bold caps">crepes</p>
            </FlexMenu>
            <FlexMenu>
              <FaUtensils style={FontStyle} />
              <p className="bold caps">yogurt & fruit parfaits</p>
            </FlexMenu>
            <FlexMenu>
              <FaUtensils style={FontStyle} />
              <p className="bold caps">yogurt & fruit parfaits</p>
            </FlexMenu>
            <FlexMenu>
              <FaUtensils style={FontStyle} />
              <p className="bold caps">yogurt & fruit parfaits</p>
            </FlexMenu>
            <FlexMenu>
              <FaUtensils style={FontStyle} />
              <p className="bold caps">yogurt & fruit parfaits</p>
            </FlexMenu>
            <FlexMenu>
              <FaUtensils style={FontStyle} />
              <p className="bold caps">yogurt & fruit parfaits</p>
            </FlexMenu>
            <FlexMenu>
              <FaUtensils style={FontStyle} />
              <p className="bold caps">yogurt & fruit parfaits</p>
            </FlexMenu>
          </GridAuto>
        </div> */}
        <GridAuto>
          <Review
            name="Rachel McLachlan"
            review="Breakfast truly felt like it was cooked with love, and Al's spice mix was next level (thanks for the jar to take home with us!). You will not regret a stay here - my only regret was not staying longer. I will be back."
            date="June 2019"
          />
          <Review
            name="Keith Irvine"
            review="Amazing home, scrumptious breakfasts, cozy spa like beds making it hard for us to leave at the end of our stay. With all this peace around your paradise it’s very hard to return back to city life."
            date="June 2020"
          />
        </GridAuto>
      </Container>
    </Section>
  )
}

export default Breakfast
