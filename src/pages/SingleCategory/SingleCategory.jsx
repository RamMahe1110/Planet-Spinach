import React, { Component } from "react";
import { connect } from "react-redux";
import {
  onCategoryRequest,
  setCategoryToNull
} from "./../../redux/Product/ProductActions";
import Loader from "../../components/Loader/Loader";
import "./SingleCategory.css";
import ProductPreview from "../../components/ProductPreview/ProductPreview";

class SingleCategory extends Component {
  state = {
    currPage: 1,
    limit: 8
  };

  componentDidMount() {
    const { currPage, limit } = this.state;
    const { categoryId } = this.props.match.params;
    this.props.onCategoryRequest(categoryId, currPage, limit);
  }

  onNextButtonClick = () => {
    const { currPage, limit } = this.state;
    const { categoryId } = this.props.match.params;
    this.props.onCategoryRequest(categoryId, currPage + 1, limit);
    this.setState({ currPage: currPage + 1 });
  };

  onPrevButtonClick = () => {
    const { currPage, limit } = this.state;
    const { categoryId } = this.props.match.params;
    this.props.onCategoryRequest(categoryId, currPage - 1, limit);
    this.setState({ currPage: currPage - 1 });
  };

  componentWillUnmount() {
    this.props.setCategoryToNull();
  }

  render() {
    const { selectedCat } = this.props;
    const { categoryId } = this.props.match.params;
    const { currPage } = this.state;

    if (selectedCat === null) {
      return (
        <div className="loader-sc">
          <Loader />
        </div>
      );
    } else {
      return (
        <div className="single-category">
          <h1>Showing {selectedCat.catName}</h1>
          <div className="all-products">
            {selectedCat.products.map(product => (
              <ProductPreview
                key={product.id}
                product={product}
                catID={categoryId}
                productID={product.id}
              />
            ))}
          </div>
          {currPage === 1 && !selectedCat.hasMore ? (
            <div className="page-btn">
              <span className="end-text">That's all freaks :)</span>
            </div>
          ) : currPage > 1 && selectedCat.hasMore ? (
            <div className="page-btn">
              <img
                onClick={this.onPrevButtonClick}
                src={require("../../assets/logos/backbtn.png")}
                className="pre-btn"
              />
              <img
                onClick={this.onNextButtonClick}
                src={require("../../assets/logos/nextbtn.png")}
                className="next-btn"
              />
            </div>
          ) : !(currPage <= 1) ? (
            <div className="page-btn">
              <span className="end-text">That's all freaks :)</span>
              <img
                style={{ left: "50%" }}
                onClick={this.onPrevButtonClick}
                src={require("../../assets/logos/backbtn.png")}
                className="pre-btn"
              />
            </div>
          ) : (
            <div className="page-btn">
              <img
                style={{ left: "50%" }}
                onClick={this.onNextButtonClick}
                src={require("../../assets/logos/nextbtn.png")}
                className="next-btn"
              />
            </div>
          )}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  selectedCat: state.ProductReducer.selectedCat
});

export default connect(
  mapStateToProps,
  { onCategoryRequest, setCategoryToNull }
)(SingleCategory);
