import styled from 'styled-components'
import Colors from './color'
import { Link } from 'react-router-dom'
export const Wrapper = styled.div`
  background: ${({ background }) =>
    background ? background : Colors.primary2};

  width: 100%;
  min-height: ${({ minHeight }) => (minHeight ? minHeight : '70vh')};
  padding: 30px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 400px) {
    padding: 30px 30px;
    min-height: 70vh;
  }
  @media (min-width: 401px) and (max-width: 700px) {
    padding: 30px 50px;
    min-height: 70vh;
  }

  @media (min-width: 701px) and (max-width: 1000px) {
    padding: 30px 60px;
    min-height: 70vh;
  }
`

export const H1 = styled.h1`
  font-family: 'Work Sans';
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 500px) {
    font-size: 40px;
    margin-bottom: 5px;
  }
  @media (min-width: 501px) and (max-width: 750px) {
    font-size: 50px;
  }
  @media (min-width: 751px) and (max-width: 1000px) {
    font-size: 60px;
  }
`

export const H2 = styled.h2`
  font-size: 50px;
  font-style: normal;
  line-height: 1.2;
  font-weight: 700;

  @media (max-width: 500px) {
    font-size: 25px;
  }
  @media (min-width: 501px) and (max-width: 750px) {
    font-size: 30px;
  }
  @media (min-width: 751px) and (max-width: 1000px) {
    font-size: 35px;
  }
`
export const H3 = styled.h3`
  font-size: 50px;
  font-style: normal;
  line-height: 1;
  font-weight: 300;
  color: '#802c6e';
  margin: 0;
  @media (max-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 501px) and (max-width: 750px) {
    font-size: 26px;
  }
  @media (min-width: 751px) and (max-width: 1000px) {
    font-size: 32px;
  }
`
export const RowSection = styled.div`
  align-self: center;
  align-content: space-between;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  //   margin: 0 auto;
  max-width: ${({ maxWidth }) => (maxWidth ? '1300px' : '1300px')};
  @media screen and (min-width: 760px) {
    margin-bottom: ${({ marginBottom }) => (marginBottom ? '80px' : null)};
    flex-direction: row;
    justify-content: space-between;
  }
`
export const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;
`

export const P1 = styled.p`
  font-size: ${({ light }) => (light ? '50px' : '50px')};
  font-style: normal;
  font-weight: ${({ light }) => (light ? '300' : '4000')};

  @media (max-width: 500px) {
    font-size: 17px;
  }
  @media (min-width: 501px) and (max-width: 750px) {
    font-size: 21px;
  }
  @media (min-width: 751px) and (max-width: 1000px) {
    font-size: 28px;
  }
`

export const P2 = styled.p`
  font-size: ${({ light }) => (light ? '30px' : '30px')};
  font-style: normal;
  font-weight: ${({ light }) => (light ? '300px' : '400px')};

  @media (max-width: 500px) {
    font-size: 17px;
  }
  @media (min-width: 501px) and (max-width: 750px) {
    font-size: 21px;
  }
  @media (min-width: 751px) and (max-width: 1000px) {
    font-size: 28px;
  }
`
export const P3 = styled.p`
  font-size: ${({ light }) => (light ? '20px' : '15px')};
  font-style: normal;
  font-weight: ${({ light }) => (light ? '300px' : '400px')};

  @media (max-width: 500px) {
    font-size: 17px;
  }
  @media (min-width: 501px) and (max-width: 750px) {
    font-size: 21px;
  }
  @media (min-width: 751px) and (max-width: 1000px) {
    font-size: 28px;
  }
`
export const DarkShadow = '5px 10px 10px rgb(0, 0, 0, 0.2)'
export const LightShadow = '5px 5px 10px rgb(0, 0, 0, 0.2)'
export const Transition = 'all 0.8s ease-in-out'
export const UnderlineStyle = styled.div`
  width: 50px;
  height: 2px;
  background: black;
  margin-top: 0;
  margin-bottom: 30px;
`
export const Underline = () => {
  return <UnderlineStyle></UnderlineStyle>
}

export const CurveWrapper = styled.div`
  width: 100%;
  background-image: url('https://res.cloudinary.com/faraamit/image/upload/v1631032792/design/divider_irbuny.svg');
  background-size: 900%;
  background-position: bottom 1% left 50%;
  background-repeat: no-repeat;
  @media screen and (min-width: 760px) {
    background-size: 600%;
  }
`

export const StyleLink = styled(Link)`
  margin-left: 15px;
  text-decoration: none;
  color: black;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const ButtonStyle = styled.button`
  background-color: #e36414;
  color: #fff;
  padding: 10px 30px;
  border-radius: 6px;
  border: 0;

  cursor: pointer;
`
