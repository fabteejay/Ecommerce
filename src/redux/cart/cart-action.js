import { TOGGLE_CART_HIDDEN, ADD_ITEM_TO_CART } from "./cart.types";

export const toggleCart = () => {
  return {
    type: TOGGLE_CART_HIDDEN
  };
};

export const addItem = item => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item
  };
};
