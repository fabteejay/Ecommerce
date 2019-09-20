import { combineReducers } from "redux";
import { userReducer } from "./users/users-reducer";
import { toggleCart } from "./cart/cart-reducer";
export const Reducers = combineReducers({
  user: userReducer,
  cart: toggleCart
});
