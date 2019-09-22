import { createSelector } from "reselect";

export const cartSelector = state => state.cart;

export const cartItemsSelector = createSelector(
  [cartSelector],
  cart => cart.cartItems
);

export const totalQuantitySelector = createSelector(
  [cartItemsSelector],
  items => items.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const cartHiddenSelector = createSelector(
  [cartSelector],
  cart => cart.hidden
);

export const totalPriceSelector = createSelector(
  [cartItemsSelector],
  items =>
    items.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0)
);
