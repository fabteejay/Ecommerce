import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { Reducers } from "./root-reducers";

//default configuration, as seen on the redux-persist npm docs
const persistConfig = {
  key: "root",
  storage,
  // Only users data will not be persisted
  blacklist: ["user"]
};

const middleware = [logger];
const persistedReducer = persistReducer(persistConfig, Reducers);

let store = createStore(persistedReducer, applyMiddleware(...middleware));
let persistor = persistStore(store);

export default { store, persistor };

//export const store = createStore(Reducers, applyMiddleware(...middleware));
