import {ADD_TO_CART, REMOVE_FROM_CART, USER_LIST} from './constants';

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

export function getUserList() {
  return {
    type: USER_LIST,
  };
}
