import React, { Component } from "react";
import { connect } from "react-redux";
import { onCategoryRequest } from "./../../redux/Product/ProductActions";
import Loader from "../../components/Loader/Loader";
import "./SingleCategory.css";
import ProductPreview from "../../components/ProductPreview/ProductPreview";

class SingleCategory extends Component {
  componentDidMount() {
    const { categoryId } = this.props.match.params;
    this.props.onCategoryRequest(categoryId);
  }

  componentWillUnmount() {}

  render() {
    const { selectedCat } = this.props;
    const { categoryId } = this.props.match.params;

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
                product={product}
                catID={categoryId}
                productID={product.id}
              />
            ))}
          </div>
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
  { onCategoryRequest }
)(SingleCategory);
