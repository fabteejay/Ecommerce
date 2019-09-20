import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import { auth } from "../auth/firebase.utils";
import Cartlogo from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart/cart-dropdown";
import { togglecart } from "../../redux/cart/cart-action";

const Header = ({ currentUser, togglecart, hidden }) => {
  console.log(hidden);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT{" "}
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            SIGN IN{" "}
          </Link>
        )}
        <Cartlogo onClick={togglecart} />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
  return { currentUser, hidden };
};

export default connect(
  mapStateToProps,
  { togglecart }
)(Header);
