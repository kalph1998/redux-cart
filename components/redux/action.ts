import {ADD_TO_CART} from './constants';

export const addToCart = (item: any) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (items: any, id: number) => {};
