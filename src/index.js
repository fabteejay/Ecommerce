import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

import store from "./redux/store";
import "./index.css";
import App from "./App";

const app = (
  <Provider store={store.store}>
    <BrowserRouter>
      <PersistGate persistor={store.persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
