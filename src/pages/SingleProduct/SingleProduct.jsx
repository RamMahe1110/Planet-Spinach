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
          <div className="order">
            <h2 className="pr-name">Product name is here</h2>
            <h5 className="pr-price">$ 49.99</h5>
            <p className="addToBasketBtn">Add To Basket</p>
            <p className="checkoutBtn">Checkout Basket</p>
            <ul className="all-del-notes">
              <li className="delivery del-1">Cash on delivery available</li>
              <li className="delivery del-2">
                Get Product delivered within 3 to 5 days
              </li>
              <li className="delivery del-3">No delivery charge</li>
              <li className="delivery del-4">
                Get it delivered within 24 hrs by paying 10$ extra
              </li>
            </ul>
            <h4>Important Note:</h4>
            <p className="note-details">
              You can return the product back to us if you got it damaged or
              with broken seal
            </p>
          </div>
        </div>
        <div className="small-guide">
          Scroll down for more info{" "}
          <img src={require("../../assets/logos/down.png")} alt="down" />
        </div>
        <div className="desc">
          <h2>Description</h2>
          <div className="desc-par1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut
            animi consectetur. Non, maiores minima. Quae repellendus a libero
            illo enim voluptates? Maxime laboriosam perferendis doloremque nam,
            libero quo, qui a molestias, fuga fugit perspiciatis deserunt totam.
            Corporis.
          </div>
          <div className="desc-par2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut
            animi consectetur. Non, maiores minima. Quae repellendus a libero
            illo enim voluptates? Maxime laboriosam perferendis doloremque nam,
            libero placeat voluptatum. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. A voluptatem iusto dolore ducimus quae? Soluta
            facere ab error, esse eligendi, in, dignissimos tempora officiis
            quaerat, nemo maxime magnam, va ad temporibus placeat minima non
            necessitatibus quo, qui a molestias, fuga fugit perspiciatis
            deserunt totam. Corporis.
          </div>
          <div className="desc-par3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut
            animi consectetur. Non, maiores minima. Quae repellendus a libero
            illo enim voluptates? Maxime laboriosam perferendis doloremque nam,
            libero placeat voluptatum. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. A voluptatem iusto dolore ducimus quae? Soluta
            facere ab error, esse eligendi, in, dignissimos tempora officiis
            quaerat molestias maiores eveniet totam possimus? Expedita esse
            veritatis, nemo maxime magnam, va ad temporibus placeat minima non
            necessitatibus quo, qui a molestias, fuga fugit perspiciatis
            deserunt totam. Corporis.
          </div>
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
