import { ADD_TO_CART, REMOVE_FROM_CART} from '../actions/actionTypes';
// import { mockProducts } from '../data/mockData';

const INITIAL_STATE = [];

//Cart state will be kept in a list of IDs, separate from productState.
export default function (state = INITIAL_STATE, action) {
  // console.log('CART REDUCER', state);
  console.log('AKSHUN', action)
  switch (action.type) {
    //is this a necessary case? left here for question
    // case FETCH_CART:
    //   const newProductsState = {...state, cart: action.payload};
      // return newProductsState;
    case ADD_TO_CART:
      const addedCartState = [...state, action.payload];
      return addedCartState;
    case REMOVE_FROM_CART:
      const removedCartState = state.filter((id) => {
        return (id !== action.payload)
      });
      return removedCartState;
    default:
      return state;
  }
}
