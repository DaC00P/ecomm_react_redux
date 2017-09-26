import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ProductReducer from './productReducer';
import CartReducer from './cartReducer';

const rootReducer = combineReducers({
  product: ProductReducer,
  cart: CartReducer,
  router: routerReducer
});

export default rootReducer;
