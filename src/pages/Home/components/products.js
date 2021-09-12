import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Colors from '../../../common/color'
import { RowSection, Wrapper } from '../../../common/GlobalStyle'
import { ProductCard } from '../../../components/cards/ProductCard'
import { Loading, ErrorLoading } from '../../../components/Loading'
import {
  fetchProducts,
  fetchProductsRequest
} from '../../../redux/actions/actionCreator'

const Products = () => {
  const dispatch = useDispatch()
  const allProducts = useSelector(state => state?.allProducts.products)
  const isLoading = useSelector(state => state?.allProducts.loading)
  const isError = useSelector(state => state?.allProducts.error)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <Wrapper background='#F2F2F2'>
      <RowSection>
        {isLoading && <Loading />}
        {isError && <ErrorLoading />}
        {allProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </RowSection>
    </Wrapper>
  )
}

export default Products
