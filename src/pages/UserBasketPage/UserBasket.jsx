import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getUserBasket,
  addProduct,
  decrementProductQty,
  setBasketToNull
} from "./../../redux/Basket/BasketAction";
import {
  setFooterDisplayToFalse,
  setFooterDisplayToTrue
} from "../../redux/Footer/FooterAction";
import Loader from "./../../components/Loader/Loader";
import "./UserBasket.css";

class UserBasket extends Component {
  componentDidMount() {
    const { currentUser } = this.props.UserReducer;
    if (currentUser) {
      this.props.getUserBasket({ token: currentUser.token });
    }

    this.props.setFooterDisplayToFalse();
  }

  onProductIncrement = id => {
    const { currentUser } = this.props.UserReducer;
    if (currentUser) {
      this.props.addProduct({ id, token: currentUser.token });
    }
  };

  onProductDecrement = id => {
    const { currentUser } = this.props.UserReducer;
    if (currentUser) {
      this.props.decrementProductQty({ id, token: currentUser.token });
    }
  };

  componentWillUnmount() {
    this.props.setBasketToNull();
    this.props.setFooterDisplayToTrue();
  }

  render() {
    const { currentUser } = this.props.UserReducer;
    const { userBasket } = this.props.BasketReducer;

    if (!currentUser) {
      return (
        <div className="loginwarn">
          <h1>
            Please Login to see your Basket{" "}
            <img
              src={require("../../assets/logos/basketwarn.png")}
              alt="full basket"
            />
          </h1>
          <Link className="login-btn" to="/auth/login">
            Click here to Login
          </Link>
        </div>
      );
    }

    return (
      <div className="basket-page">
        <h2>Your Basket</h2>
        <div className="basket">
          {userBasket === null ? (
            <Loader />
          ) : userBasket.length > 0 ? (
            userBasket.map(item => (
              <div key={item.id} className="basket-item">
                <img
                  className="basket-item-img"
                  width="50px"
                  height="50px"
                  src={item.productImg}
                  alt="basket-item"
                />
                <span className="basket-item-name">{item.productName}</span>
                <img
                  onClick={() => this.onProductDecrement(item.id)}
                  className="qty-dec"
                  src={require("../../assets/logos/minus.png")}
                  alt="dec"
                />
                <p>{item.quantity}</p>
                <img
                  onClick={() => this.onProductIncrement(item.id)}
                  className="qty-inc"
                  src={require("../../assets/logos/plus.png")}
                  alt="inc"
                />
                <span className="item-total">${item.total}</span>
              </div>
            ))
          ) : (
            <h1 className="empty-basket-msg">Your Basket is empty </h1>
          )}
        </div>
        <div className="bill">
          <p className="total">Total: $69.69</p>
          <p className="payment">Pay</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  UserReducer: state.UserReducer,
  BasketReducer: state.BasketReducer
});

export default connect(
  mapStateToProps,
  {
    getUserBasket,
    addProduct,
    decrementProductQty,
    setFooterDisplayToFalse,
    setFooterDisplayToTrue,
    setBasketToNull
  }
)(UserBasket);
