import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllCategoryList,
  setAllCatToNull
} from "./../../redux/Product/ProductActions";
import Loader from "./../../components/Loader/Loader";
import "./AllCategory.css";

class AllCategory extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    this.props.getAllCategoryList();
  }

  componentWillUnmount() {
    this.props.setAllCatToNull();
  }

  render() {
    const { allCatList } = this.props.ProductReducer;
    return (
      <div className="all-category">
        <div className="top-content-all-cat">
          <h2 className="large-dis">
            Select from our wide range of
            <span className="highlighted"> healthy food categories</span>
          </h2>
          <h1 className="small-dis-head">healthy food categories</h1>
        </div>

        <div className="category-list">
          {allCatList === null ? (
            <div className="all-cat-loader-ps">
              <div className="all-cat-loader">
                <Loader />
              </div>
            </div>
          ) : (
            allCatList.map(catItem => (
              <Link
                key={catItem.id}
                to={`/category/${catItem.id}`}
                className="category-item"
              >
                <h6 className="category-title">{catItem.name}</h6>
              </Link>
            ))
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ProductReducer: state.ProductReducer
});

export default connect(mapStateToProps, {
  getAllCategoryList,
  setAllCatToNull
})(AllCategory);
