import React, { Component } from "react";
import { SHOP_DATA } from "../../data/shop.data";
import Collectionpreview from "../collection-preview/collection-preview";

export default class ShopPage extends Component {
  state = { collections: SHOP_DATA };
  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherSectionProps }) => {
          return (
            <Collectionpreview
              key={id}
              {...otherSectionProps}
            ></Collectionpreview>
          );
        })}
      </div>
    );
  }
}
