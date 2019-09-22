import React from "react";
import { connect } from "react-redux";

import {
  removeCartItem,
  addItem,
  removeaddItem
} from "../../redux/cart/cart-action";
import "./checkout-item.styles.scss";

const CheckOutItem = ({ item, removeCartItem, addItem, removeaddItem }) => {
  const { price, imageUrl, quantity, name } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name}></img>
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span onClick={() => removeaddItem(item)} className="arrow">
          &#10094;
        </span>

        <span className="value">{quantity}</span>

        <span onClick={() => addItem(item)} className="arrow">
          &#10095;
        </span>
      </div>
      <span className="price">{price}</span>
      <div onClick={() => removeCartItem(item)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default connect(
  null,
  { removeCartItem, addItem, removeaddItem }
)(CheckOutItem);
