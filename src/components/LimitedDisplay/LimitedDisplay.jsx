import React, { Component } from "react";
import "./LimitedDisplay.css";
import ProductPreview from "./../ProductPreview/ProductPreview";
import { Link } from "react-router-dom";

class LimitedDisplay extends Component {
  state = {};
  render() {
    return (
      <div className="limited-display">
        {this.props.items.map(item => {
          if (item.catId === 1 || item.catId === 2 || item.catId === 8) {
            return (
              <div className="limited-container" key={item.catName}>
                <Link to={`/category/${item.catId}`}>
                  <h2 className="cat-name">{item.catName}</h2>
                </Link>
                <div className="limited-items">
                  {item.products.map((product, i) => {
                    if (i < 3) {
                      return (
                        <div className="limited-item" key={product.name}>
                          <ProductPreview product={product} />
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
}

export default LimitedDisplay;
