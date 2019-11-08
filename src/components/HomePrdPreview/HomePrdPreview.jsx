import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getLimitedProducts,
  setProductsToNull
} from "./../../redux/Product/ProductActions";
import LimitedDisplay from "./../LimitedDisplay/LimitedDisplay";
import Loader from "./../Loader/Loader";
import "./HomePrdPreview.css";

class HomePrdPreview extends Component {
  componentDidMount() {
    const data = {
      categories: ["Healthy Carbs", "Natural Sweetners", "Plant Protein"],
      limit: 4
    };
    this.props.getLimitedProducts(data);
  }

  componentWillUnmount() {
    this.props.setProductsToNull();
  }

  render() {
    const { products } = this.props.ProductReducer;

    if (products === null) {
      return (
        <div className="all-cat-loader-ps">
          <div className="all-cat-loader">
            <Loader />
          </div>
        </div>
      );
    }

    return (
      <div className="homePrdReview">
        <div>
          <div className="top-message">
            <h1>Products to make you shine</h1>
          </div>
          <LimitedDisplay items={products} />
          <Link to="/category/all">
            <h3 className="explore-btn">Explore all Categories</h3>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ProductReducer: state.ProductReducer
});

export default connect(
  mapStateToProps,
  { getLimitedProducts, setProductsToNull }
)(HomePrdPreview);
