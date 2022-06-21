import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const Wrapper = styled.div``

const Bar = styled.div`
  width: 100%;
`

export default function BookBox() {
  return (
    <Wrapper>
      <Bar
        id="lodgify-search-bar"
        data-website-id={202134}
        data-language-code="en"
        data-checkout-page-url="https://checkout.lodgify.com/kathryn-kessler/en/#/231709"
        data-dates-check-in-label="Arrival"
        data-dates-check-out-label="Departure"
        data-guests-counter-label="Guest"
        data-guests-input-singular-label="{{NumberOfGuests}} guest"
        data-guests-input-plural-label="{{NumberOfGuests}} guests"
        data-location-input-label="Location"
        data-search-button-label="Book Now"
        data-new-tab="true"
      ></Bar>
      {/* <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n  html {\n    --lodgify-ui-action-color: #fac600;\n    --lodgify-ui-action-darker-color: #c89e00;\n    --lodgify-ui-action-lighter-color: #fde899;\n    --lodgify-ui-action-contrast-color: #000000;\n  }\n  ",
        }}
      /> */}
    </Wrapper>
  )
}
