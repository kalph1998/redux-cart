import {ADD_TO_CART, REMOVE_FROM_CART} from './constants';

export const addToCart = (item: any) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (item: any) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};
