import { productsActionType } from '../constants/actions'

const initialState = {
  products: [],
  loading: false,
  error: null
}

export const productsReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case productsActionType.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: payload
      }
    case productsActionType.FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: error,
        products: []
      }
    case productsActionType.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case productsActionType.CLEAR_PRODUCTS:
      return {
        ...state,
        loading: false,
        error: null,
        products: []
      }

    default:
      return state
  }
}
