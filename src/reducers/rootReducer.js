import { combineReducers } from 'redux';

import ProductReducer from './productReducer'

const testReducer = () => {
  return {fart: 1, poop: 2, pee: 3}
}

const rootReducer = combineReducers({
  products: ProductReducer,
  test: testReducer
});

export default rootReducer;
