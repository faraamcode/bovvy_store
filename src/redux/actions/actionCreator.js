import { productsActionType } from '../constants/actions'

export const fetchProductsSuccess = product => {
  return {
    type: productsActionType.FETCH_PRODUCTS_SUCCESS,
    payload: product
  }
}
export const fetchProductsFailed = () => {
  return {
    type: productsActionType.FETCH_PRODUCTS_FAILED
  }
}
export const fetchProductsRequest = () => {
  return {
    type: productsActionType.FETCH_PRODUCTS_REQUEST,
    payload: product
  }
}
