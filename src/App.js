import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./components/shop/ShopPage";

import "./App.css";

function App() {
  return (
    <div>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/shop" component={ShopPage}></Route>
    </div>
  );
}

export default App;
