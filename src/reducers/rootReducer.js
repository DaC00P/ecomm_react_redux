import { combineReducers } from 'redux';

const testReducer = () => {
  return {fart: 1, poop: 2, pee: 3}
}

const rootReducer = combineReducers({
  products: testReducer
});

export default rootReducer;
