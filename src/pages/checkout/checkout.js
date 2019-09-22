import React from "react";
import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";
import {
  totalPriceSelector,
  cartItemsSelector
} from "../../redux/cart/cart.selector";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = ({ cartItems, totalPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantty</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => (
        <CheckOutItem id={item.id} item={item}></CheckOutItem>
      ))}
      <div className="total">
        <span>Total : &#8358;{totalPrice}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  totalPrice: totalPriceSelector
});
export default connect(mapStateToProps)(Checkout);
