import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import ProductReducer from './productReducer'

const rootReducer = combineReducers({
  product: ProductReducer,
  router: routerReducer
});

export default rootReducer;
