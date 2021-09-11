import React from 'react'
import Colors from '../../../common/color'
import { Wrapper } from '../../../common/GlobalStyle'
import { ProductCard } from '../../../components/cards/ProductCard'

const Products = () => {
  return (
    <Wrapper background={Colors.primary}>
      <ProductCard />
    </Wrapper>
  )
}

export default Products
