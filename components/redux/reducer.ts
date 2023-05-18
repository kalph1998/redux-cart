import {ADD_TO_CART} from './constants';

const initalState: any[] = [];

export const reducer = (state = initalState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    default:
      return state;
  }
};
