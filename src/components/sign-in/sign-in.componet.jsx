import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, sigInWithGoogle } from "../auth/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends Component {
  state = { email: "", password: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert("Login succesfull");
      this.setState({ email: "", password: "" });
    } catch (error) {
      alert("Login failed", error);
    }
  };

  render() {
    return (
      <div className="sign-in">
        <h2> I already have an account</h2>
        <span> Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            label="email"
          ></FormInput>
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="password"
          ></FormInput>
          <div className="button">
            <CustomButton onClick={this.handleSubmit} type="submit">
              {" "}
              Sign in{" "}
            </CustomButton>
            <CustomButton isGoogleSignedIn onClick={sigInWithGoogle}>
              {" "}
              SIGN IN WITH GOOGLE{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
