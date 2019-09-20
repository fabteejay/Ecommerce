import React from "react";
import { connect } from "react-redux";

import CustomButtom from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      {cartItems.map(cartItem => (
        <CartItem {...cartItem}></CartItem>
      ))}
      <CustomButtom> Go to check out</CustomButtom>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  return { cartItems };
};

export default connect(mapStateToProps)(CartDropdown);
