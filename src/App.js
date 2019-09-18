import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./components/shop/ShopPage";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./components/sign-in/sign-in-sign-out.component";
import { auth } from "./components/auth/firebase.utils";

import "./App.css";

class App extends React.Component {
  state = { currentUser: null };

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(auth => {
      this.setState({ currentUser: auth });
    });
  }

  componentWillUmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/sign-in" component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
