import React, { Component } from "react";
import { connect } from "react-redux";
import {
  onProductRequest,
  setSingleProductToNull
} from "./../../redux/Product/ProductActions";
import { addProduct } from "../../redux/Basket/BasketAction";
import Loader from "./../../components/Loader/Loader";
import "./SingleProduct.css";
import { Link } from "react-router-dom";

class SingleProduct extends Component {
  state = {
    currentImg: 0
  };

  onImageClick = index => {
    this.setState({ currentImg: index });
  };

  componentDidMount() {
    const productID = this.props.match.params.productId;
    const { currentUser } = this.props.UserReducer;
    this.props.onProductRequest(
      productID,
      currentUser ? currentUser.token : null
    );
  }

  componentWillUnmount() {
    this.props.setSingleProductToNull();
  }

  onAddToBasketClick = () => {
    const { currentUser } = this.props.UserReducer;
    const { selectedProduct } = this.props.ProductReducer;
    if (!currentUser) {
      alert("Please Login to Perform that action");
    } else {
      const data = {
        token: currentUser.token,
        productid: selectedProduct.product.id,
        categoryid: selectedProduct.product.catId,
        price: selectedProduct.product.price.amount,
        single: true
      };
      this.props.addProduct(data);
    }
  };

  render() {
    const { currentUser } = this.props.UserReducer;
    const { selectedProduct } = this.props.ProductReducer;

    console.log(selectedProduct, "checccc");

    if (selectedProduct === null) {
      return (
        <div style={{ height: "75vh" }} className="all-cat-loader-ps">
          <div className="all-cat-loader">
            <Loader />
          </div>
        </div>
      );
    }

    return (
      <div className="single-product">
        <div className="img-and-order">
          <div className="img">
            <img
              className="main-img"
              src={selectedProduct.product.images[this.state.currentImg]}
              alt="product"
            />
            <div className="images-preview">
              {selectedProduct.product.images.map((img, i) => (
                <img
                  onClick={() => this.onImageClick(i)}
                  className={`small-img ${
                    this.state.currentImg === i ? `curr-small-img` : ``
                  }`}
                  key={i}
                  src={img}
                  width="100px"
                  height="auto"
                  alt="product"
                />
              ))}
            </div>
          </div>
          <div className="order">
            <h2 className="pr-name">Product name is here</h2>
            <h5 className="pr-price">
              $ {selectedProduct.product.price.amount}
            </h5>
            {!currentUser ? (
              <p onClick={this.onAddToBasketClick} className="addToBasketBtn">
                Add To Basket
              </p>
            ) : selectedProduct.quantity ? (
              <p className="addedToCart">Added to Basket</p>
            ) : (
              <p onClick={this.onAddToBasketClick} className="addToBasketBtn">
                Add To Basket
              </p>
            )}
            <Link to="/userbasket">
              <p className="checkoutBtn">Checkout Basket</p>
            </Link>
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
  ProductReducer: state.ProductReducer,
  UserReducer: state.UserReducer
});

export default connect(
  mapStateToProps,
  { onProductRequest, setSingleProductToNull, addProduct }
)(SingleProduct);
