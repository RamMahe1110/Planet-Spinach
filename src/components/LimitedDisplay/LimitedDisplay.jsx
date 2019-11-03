import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductPreview from "./../ProductPreview/ProductPreview";
import "./LimitedDisplay.css";

class LimitedDisplay extends Component {
  render() {
    return (
      <div className="limited-display">
        {this.props.items.map(item => {
          return (
            <div className="limited-container" key={item.catName}>
              <Link to={`/category/${item.catId}`}>
                <h2 className="cat-name">{item.catName}</h2>
              </Link>
              <div className="limited-items">
                {item.products.map((product, i) => {
                  if (i < 4) {
                    return (
                      <div className="limited-item" key={product.id}>
                        <ProductPreview
                          product={product}
                          catID={item.catId}
                          productID={product.id}
                        />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default LimitedDisplay;
