import axios from 'axios'
import { productsActionType } from '../constants/actions'
export const fetchProductsSuccess = product => {
  return {
    type: productsActionType.FETCH_PRODUCTS_SUCCESS,
    payload: product
  }
}
export const fetchProductsFailed = message => {
  return {
    type: productsActionType.FETCH_PRODUCTS_FAILED,
    error: message
  }
}
export const fetchProductsRequest = () => {
  return {
    type: productsActionType.FETCH_PRODUCTS_REQUEST
  }
}
export const clearProducts = () => {
  return {
    type: productsActionType.CLEAR_PRODUCTS
  }
}
export const fetchProducts = () => {
  return async dispatch => {
    dispatch(fetchProductsRequest())
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      return dispatch(fetchProductsSuccess(response.data))
    } catch (e) {
      console.log(e)
      dispatch(fetchProductsFailed('failed'))
    }
  }
}
