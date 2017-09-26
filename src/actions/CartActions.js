import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import { mockProducts } from '../data/mockData';

export function addToCart(id){
  // console.log(id)
  return {
    type: ADD_TO_CART,
    payload: id
  }
};

export function removeFromCart(id){
  // console.log(id)
  return {
    type: REMOVE_FROM_CART,
    payload: id
  }
};
