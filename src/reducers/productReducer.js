import { FETCH_PRODUCTS } from '../actions/actionTypes';
import {mockProducts} from '../data/mockData';

const INITIAL_STATE = {products: mockProducts};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      const newState = {...state, products: action.payload};
      return newState;
    default:
      return state;
  }
}
