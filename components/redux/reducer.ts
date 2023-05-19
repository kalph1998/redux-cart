import {ADD_TO_CART, REMOVE_FROM_CART, SET_USER_DATA} from './constants';

const initalState: any[] = [];

export const reducer = (state = initalState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      let filteredItems = state.filter(item => {
        return item.id !== action.payload;
      });
      return [...filteredItems];

    case SET_USER_DATA:
      return [action.data];
    default:
      return state;
  }
};
