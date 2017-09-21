// import Axios from 'axios';
// import jwt from 'jsonwebtoken';

import { FETCH_PRODUCTS, FETCH_PRODUCT } from './actionTypes';
import { mockProducts } from '../data/mockData';

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

export function fetchProduct(id){
  const product = mockProducts.filter((product) => {
    return product.id === parseInt(id, 10);
  });
  return {
    type: FETCH_PRODUCT,
    payload: product[0]
  }
};
