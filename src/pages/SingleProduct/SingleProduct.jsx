import React, { Component } from "react";
import "./SingleProduct.css";
import { onProductRequest } from "./../../redux/Product/ProductActions";
import Loader from "./../../components/Loader/Loader";
import { connect } from "react-redux";

class SingleProduct extends Component {
  state = {
    currentImg: 0
  };

  onImageClick = index => {
    this.setState({ currentImg: index });
  };

  componentDidMount() {
    const catID = this.props.match.params.categoryId;
    const productID = this.props.match.params.productId;
    this.props.onProductRequest({ catID, productID });
  }

  render() {
    const { selectedProduct } = this.props.ProductReducer;

    if (selectedProduct === null) {
      return (
        <div>
          <Loader />
        </div>
      );
    }

    return (
      <div className="single-product">
        <div className="img-and-order">
          <div className="img">
            <img
              className="main-img"
              src={selectedProduct.images[this.state.currentImg]}
              alt="x"
            />
            <div className="images-preview">
              {selectedProduct.images.map((img, i) => (
                <img
                  onClick={() => this.onImageClick(i)}
                  className="small-img"
                  src={img}
                  width="100px"
                  height="auto"
                />
              ))}
            </div>
          </div>
          <div className="order"></div>
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
  { onProductRequest }
)(SingleProduct);
