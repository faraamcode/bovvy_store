import React from 'react'
import styled from 'styled-components'
import Colors from '../../../common/color'
import {
  ButtonStyle,
  CurveWrapper,
  H1,
  H3,
  RowSection,
  Transition,
  Wrapper
} from '../../../common/GlobalStyle'
import HeroImage from '../../../asset/images/store.svg'

const Hero = () => {
  return (
    <CurveWrapper>
      <Wrapper background='rgb(255,255,255, 0.95)'>
        <RowSection>
          <InfoContainer>
            <H1>Bovvy store</H1>
            <H3>The best that you can trust anytime any day</H3>
            <Button>Shop now</Button>
          </InfoContainer>
          <ImageContainer>
            <img src={HeroImage} alt='hero-img' />
          </ImageContainer>
        </RowSection>
      </Wrapper>
    </CurveWrapper>
  )
}

export default Hero

const InfoContainer = styled.div`
  align-self: start;
  justify-self: start;
  flex: 1;
`
const ImageContainer = styled.div`
  flex: 1;
`

const Button = styled(ButtonStyle)`
  width: 300px;
  height: 50px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 50px;
  transition: ${Transition};
  &:hover {
    opacity: 0.8;
  }
`
