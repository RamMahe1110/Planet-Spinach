import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getUserBasket,
  incrementProductQty,
  decrementProductQty
} from "./../../redux/Basket/BasketAction";
import "./UserBasket.css";
import Loader from "./../../components/Loader/Loader";

class Usercart extends Component {
  componentDidMount() {
    const { currentUser } = this.props.UserReducer;
    if (currentUser) {
      this.props.getUserBasket({ token: currentUser.token });
    }
  }

  onProductIncrement = id => {
    const { currentUser } = this.props.UserReducer;
    if (currentUser) {
      this.props.incrementProductQty({ id, token: currentUser.token });
    }
  };

  onProductDecrement = id => {
    const { currentUser } = this.props.UserReducer;
    if (currentUser) {
      this.props.decrementProductQty({ id, token: currentUser.token });
    }
  };

  render() {
    const { currentUser } = this.props.UserReducer;
    const { userBasket } = this.props.BasketReducer;

    if (!currentUser) {
      return (
        <div className="loginwarn">
          <h1>
            Please Login to see your Basket{" "}
            <img src={require("../../assets/logos/basketwarn.png")} />
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
          ) : (
            userBasket.map(item => (
              <div className="basket-item">
                <img
                  className="basket-item-img"
                  width="50px"
                  height="50px"
                  src={item.productImg}
                  alt="basket-item"
                />
                <span className="basket-item-name">{item.productName}</span>
                <img
                  onClick={() => this.onProductDecrement(item.cartItemId)}
                  className="qty-dec"
                  src={require("../../assets/logos/minus.png")}
                  alt="dec"
                />
                <p>{item.quantity}</p>
                <img
                  onClick={() => this.onProductIncrement(item.cartItemId)}
                  className="qty-inc"
                  src={require("../../assets/logos/plus.png")}
                  alt="inc"
                />
                <span>{item.total}</span>
              </div>
            ))
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
  { getUserBasket, incrementProductQty, decrementProductQty }
)(Usercart);
