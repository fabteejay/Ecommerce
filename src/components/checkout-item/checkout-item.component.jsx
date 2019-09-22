import React from "react";

import "./checkout-item.styles.scss";

const CheckOutItem = ({ item }) => {
  const { price, imageUrl, quantity, name } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckOutItem;
