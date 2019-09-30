import React, { Component } from "react";
import "./AllCategory.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AllCategory extends Component {
  render() {
    const { Products } = this.props.ProductReducer;
    return (
      <div className="all-category">
        <div className="top-content-all-cat">
          <h2>
            Select from our wide range of{" "}
            <span className="highlighted">healthy food categories</span>
          </h2>
        </div>
        <div className="category-list">
          {Products.map(catItem => (
            <Link to={`/category/${catItem.catId}`} className="category-item">
              <img
                src="https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
                alt=""
              />
              <h6 className="category-title">{catItem.catName}</h6>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ProductReducer: state.ProductReducer
});

export default connect(mapStateToProps)(AllCategory);
