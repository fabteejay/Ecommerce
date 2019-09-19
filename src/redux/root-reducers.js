import { combineReducers } from "redux";
import { userReducer } from "./users/users-reducer";

export const Reducers = combineReducers({ user: userReducer });
