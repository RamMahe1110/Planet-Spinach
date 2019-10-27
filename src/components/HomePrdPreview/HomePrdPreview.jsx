import React, { Component } from "react";
import "./HomePrdPreview.css";
import LimitedDisplay from "./../LimitedDisplay/LimitedDisplay";
import { connect } from "react-redux";

class HomePrdPreview extends Component {
  render() {
    const { products } = this.props.ProductReducer;
    return (
      <div className="homePrdReview">
        <div>
          <div className="top-message">
            <h1>Products to make you shine</h1>
          </div>
          <LimitedDisplay items={products} />
          <h3>Explore all Categories</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ProductReducer: state.ProductReducer
});

export default connect(mapStateToProps)(HomePrdPreview);
