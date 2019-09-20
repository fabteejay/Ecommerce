import React from "react";
import { connect } from "react-redux";

import "./collection-item.styles.scss";
import CustomBottom from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart-action";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomBottom onClick={() => addItem(item)} inverted>
        add to cart
      </CustomBottom>
    </div>
  );
};

export default connect(
  null,
  { addItem }
)(CollectionItem);
