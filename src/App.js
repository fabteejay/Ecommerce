import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Checkout from "./pages/checkout/checkout";
import { userAction } from "./redux/users/users-action";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./components/shop/ShopPage";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./components/sign-in-sign-up/sign-in-sign-out.component";
import {
  auth,
  createUserProfileDocument
} from "./components/auth/firebase.utils";

import "./App.css";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { userAction } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(Snapshot => {
          console.log(Snapshot);
          userAction({
            currentUser: Snapshot.id,
            ...Snapshot.data()
          });
        });
      } else {
        userAction({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props.user;
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/checkout" component={Checkout}></Route>
          <Route
            path="/sign-in"
            render={() =>
              currentUser ? (
                <Redirect to="/"></Redirect>
              ) : (
                <SignInAndSignUpPage></SignInAndSignUpPage>
              )
            }
          ></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  { userAction }
)(App);
