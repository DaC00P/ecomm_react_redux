import { FETCH_PRODUCTS, FETCH_PRODUCT } from '../actions/actionTypes';
import {mockProducts} from '../data/mockData';

const INITIAL_STATE = {products: mockProducts, product: {}};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      const newProductsState = {...state, products: action.payload};
      return newProductsState;
    case FETCH_PRODUCT:
      const newProductState = {...state, product: action.payload};
      return newProductState;
    default:
      return state;
  }
}
