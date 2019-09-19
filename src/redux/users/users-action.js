import { CURRENT_USER } from "./user-types";

export const userAction = user => ({
  type: CURRENT_USER,
  payload: user.currentUser
});
