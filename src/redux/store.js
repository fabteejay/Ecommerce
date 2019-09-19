import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Reducers } from "./root-reducers";

const middleware = [logger];

export const store = createStore(Reducers, applyMiddleware(...middleware));
