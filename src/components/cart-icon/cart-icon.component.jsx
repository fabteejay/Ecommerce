import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCart } from "../../redux/cart/cart-action";
import { totalQuantitySelector } from "../../redux/cart/cart.selector";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const Cartlogo = ({ toggleCart, totalQuantity }) => {
  console.log("inside", totalQuantity);
  return (
    <div onClick={toggleCart} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  totalQuantity: totalQuantitySelector
});

export default connect(
  mapStateToProps,
  { toggleCart }
)(Cartlogo);
