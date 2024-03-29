import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART
} from "./cart.types";

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

export const removeaddItem = item => {
  return {
    type: REMOVE_ITEM_TO_CART,
    payload: item
  };
};

export const removeCartItem = item => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: item
  };
};
