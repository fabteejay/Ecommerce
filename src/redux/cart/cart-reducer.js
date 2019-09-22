import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART
} from "./cart.types";
import { addItemToCart, removeItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case REMOVE_ITEM_TO_CART:
      return {
        ...state,
        cartItems: removeItemToCart(state.cartItems, action.payload)
      };

    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };

    default:
      return state;
  }
};
