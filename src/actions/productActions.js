import Axios from 'axios';
import jwt from 'jsonwebtoken';

import { FETCH_PRODUCTS, FETCH_PRODUCT } from './actionTypes';
import { mockProducts, mockSingleProduct } from '../data/mockData';

// export function fetchProducts(){
//   let request = Axios.get('/products');

//   return {
//     type: FETCH_PRODUCTS,
//     payload: request
//   }
// };
export function fetchProducts(){
  return {
    type: FETCH_PRODUCTS,
    payload: mockProducts
  }
};

// export function fetchProduct(){
//   let request = Axios.get('/products/1');

//   return {
//     type: FETCH_PRODUCT,
//     payload: request
//   }
// };

export function fetchProduct(){
  return {
    type: FETCH_PRODUCTS,
    payload: mockSingleProduct
  }
};
