import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CustomButtom from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { toggleCart } from "../../redux/cart/cart-action";
const CartDropdown = ({ cartItems, toggleCart, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} {...cartItem}></CartItem>
        ))
      ) : (
        <span className="empty-message">Select an item</span>
      )}
      <CustomButtom
        onClick={() => {
          toggleCart();
          history.push("/checkout");
        }}
      >
        {" "}
        Go to check out
      </CustomButtom>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  return { cartItems };
};

export default withRouter(
  connect(
    mapStateToProps,
    { toggleCart }
  )(CartDropdown)
);
