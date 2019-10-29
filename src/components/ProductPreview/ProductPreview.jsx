import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ProductPreview.css";

const ProductPreview = ({ product, catID, productID, history }) => {
  return (
    <div
      onClick={() => history.push(`/category/${catID}/${productID}`)}
      className="product-preview"
    >
      <img src={product.images[0]} alt={product.name} />
      <p style={{ padding: "10px", color: "grey" }}>{product.name}</p>
      <p className="add-to-basket">Add to Basket</p>
      <p className="price">
        ${product.price.amount}/{product.price.unit}
      </p>
    </div>
  );
};

export default withRouter(ProductPreview);
