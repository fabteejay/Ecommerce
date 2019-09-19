import React, { Component } from "react";
import SignIn from "./sign-in.componet";
import SignUp from "../sign-up/sign-up.component";
import "./sign-in.styles.scss";

class SignInAndSignUpPage extends Component {
  render() {
    return (
      <div className="sign-in-and-sign-up">
        <SignIn></SignIn>
        <SignUp></SignUp>
      </div>
    );
  }
}

export default SignInAndSignUpPage;
