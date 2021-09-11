import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../../common/color'
import { DarkShadow } from '../../common/GlobalStyle'

export const ProductCard = ({ id, title, category, price, image, rating }) => {
  return (
    <Wrapper to={id}>
      <ImageWrapper>
        <img src={image} alt={title} />
      </ImageWrapper>
      <OtherDetailStyle>
        <div>
          <h5>{title}</h5>
          <span>{category}</span>
          <h6>Rating:{rating?.rate}</h6>
        </div>
        <PriceStyle>$${price}</PriceStyle>
      </OtherDetailStyle>
    </Wrapper>
  )
}

const Wrapper = styled(Link)`
  min-width: 250px;
  width: 300px;
  height: 400px;
  box-shadow: ${DarkShadow};
  background: ${Colors.primary};
  text-decoration: none;
  color: ${Colors.dark};
  span,
  h5,
  h6 {
    margin: 0;
    margin-left: 5px;
  }
  h5 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 18px;
  }
  h6 {
    margin-top: 10px;
    font-size: 15px;
  }
  span {
    background: ${Colors.pink};
    padding: 5px;
    border-radius: 3px;
    margin-top: 100px;
  }
`
const ImageWrapper = styled.div`
  width: 100%;
  height: 75%;
  background: red;
`
const PriceStyle = styled.div`
  align-self: end;
  margin-right: 5px;
  font-weight: bolder;
`

const OtherDetailStyle = styled.div`
  display: flex;
  justify-content: space-between;
`
