import React from "react"
import styled from "styled-components"
import Help from "./pachaHelp"
import { Container, Section, Flex } from "./layoutComponents"

const Frame = styled.iframe`
  height: 700px;
  width: 100%;
`

export default function Calander() {
  return (
    <Section id="calendar">
      <Container className="spacing">
        <Frame src="https://secure.massagezone.biz/pachamammamassagetherapy/index.php?page=tpltsched2_modmain&embedid=540&sessionType=min" />
        <Flex>
          <div className="spacing">
            <div>
              <h2 className="caps">missed appointments</h2>
              <hr />
            </div>
            <p>
              When you book an appointment with us, that time is set aside for
              you - and ONLY you. We never double book and we try to always be
              ready for you when you arrive. In return, we ask that you keep
              your promise to us and show up for your appointment on time.
              Please understand that missed appointments prevent us from
              catering to other clients. That said, our policy is simple. If you
              do not show up for your scheduled appointment, and you have not
              notified us at least 24 hours in advance, you will be required to
              pay the full cost of the treatment as booked.
            </p>
          </div>
          <div className="spacing">
            <div>
              <h2 className="caps">cancellations</h2>
              <hr />
            </div>
            <p>
              In the event that you are unable to keep your scheduled
              appointment with us, please contact us by phone at least 24 hours
              prior to your appointment. If you do not reach us, please leave a
              message on our voice-mail system. If we do not hear from you
              within this time frame, and you do not keep your appointment, the
              above policy will be applied. Note: We recognize that no one is
              perfect and there are circumstances that are out of your control
              (sudden illness, family emergencies, etc.) and so your healthcare
              provider may make an exception to the above policies on those rare
              occasions.
            </p>
          </div>
        </Flex>
        <Help />
      </Container>
    </Section>
  )
}