import { CURRENT_USER } from "./user-types";

const INITIAL_USER_STATE = {
  currentUser: null
};

export const userReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
