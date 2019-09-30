import React, { Component } from "react";
import "./ProductPreview.css";

class ProductPreview extends Component {
  state = {};
  render() {
    const { product } = this.props;
    return (
      <div className="product-preview">
        <img src={product.images[0]} alt={product.name} />
        <p style={{ padding: "10px", color: "grey" }}>{product.name}</p>

        <p className="add-to-basket">Add to Basket</p>

        <p className="price">
          ${product.price.amount}/{product.price.unit}
        </p>
      </div>
    );
  }
}

export default ProductPreview;
