import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./UserBasket.css";

class Usercart extends Component {
  render() {
    const { currentUser } = this.props.UserReducer;

    if (currentUser) {
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
          <div className="basket-item">
            <img
              className="basket-item-img"
              width="50px"
              height="50px"
              src="https://www.bigbasket.com/media/uploads/p/xxl/40016670_6-disano-olive-oil-extra-virgin.jpg"
              alt="basket-item"
            />
            <span className="basket-item-name">Oleev Oil</span>
            <img
              className="qty-dec"
              src={require("../../assets/logos/minus.png")}
            />
            <p>5</p>
            <img
              className="qty-inc"
              src={require("../../assets/logos/plus.png")}
            />
            <span>total</span>
          </div>
          <div className="basket-item">
            <img
              className="basket-item-img"
              width="50px"
              height="50px"
              src="https://www.bigbasket.com/media/uploads/p/xxl/40016670_6-disano-olive-oil-extra-virgin.jpg"
              alt="basket-item"
            />
            <span className="basket-item-name">Oleev Oil</span>
            <img
              className="qty-dec"
              src={require("../../assets/logos/minus.png")}
            />
            <p>5</p>
            <img
              className="qty-inc"
              src={require("../../assets/logos/plus.png")}
            />
            <span>total</span>
          </div>
          <div className="basket-item">
            <img
              className="basket-item-img"
              width="50px"
              height="50px"
              src="https://www.bigbasket.com/media/uploads/p/xxl/40016670_6-disano-olive-oil-extra-virgin.jpg"
              alt="basket-item"
            />
            <span className="basket-item-name">Oleev Oil</span>
            <img
              className="qty-dec"
              src={require("../../assets/logos/minus.png")}
            />
            <p>5</p>
            <img
              className="qty-inc"
              src={require("../../assets/logos/plus.png")}
            />
            <span>total</span>
          </div>
          <div className="basket-item">
            <img
              className="basket-item-img"
              width="50px"
              height="50px"
              src="https://www.bigbasket.com/media/uploads/p/xxl/40016670_6-disano-olive-oil-extra-virgin.jpg"
              alt="basket-item"
            />
            <span className="basket-item-name">Oleev Oil</span>
            <img
              className="qty-dec"
              src={require("../../assets/logos/minus.png")}
            />
            <p>5</p>
            <img
              className="qty-inc"
              src={require("../../assets/logos/plus.png")}
            />
            <span>total</span>
          </div>
          <div className="basket-item">
            <img
              className="basket-item-img"
              width="50px"
              height="50px"
              src="https://www.bigbasket.com/media/uploads/p/xxl/40016670_6-disano-olive-oil-extra-virgin.jpg"
              alt="basket-item"
            />
            <span className="basket-item-name">Oleev Oil</span>
            <img
              className="qty-dec"
              src={require("../../assets/logos/minus.png")}
            />
            <p>5</p>
            <img
              className="qty-inc"
              src={require("../../assets/logos/plus.png")}
            />
            <span>total</span>
          </div>
          <div className="basket-item">
            <img
              className="basket-item-img"
              width="50px"
              height="50px"
              src="https://www.bigbasket.com/media/uploads/p/xxl/40016670_6-disano-olive-oil-extra-virgin.jpg"
              alt="basket-item"
            />
            <span className="basket-item-name">Oleev Oil</span>
            <img
              className="qty-dec"
              src={require("../../assets/logos/minus.png")}
            />
            <p>5</p>
            <img
              className="qty-inc"
              src={require("../../assets/logos/plus.png")}
            />
            <span>total</span>
          </div>
          <div className="basket-item">
            <img
              className="basket-item-img"
              width="50px"
              height="50px"
              src="https://www.bigbasket.com/media/uploads/p/xxl/40016670_6-disano-olive-oil-extra-virgin.jpg"
              alt="basket-item"
            />
            <span className="basket-item-name">Oleev Oil</span>
            <img
              className="qty-dec"
              src={require("../../assets/logos/minus.png")}
            />
            <p>5</p>
            <img
              className="qty-inc"
              src={require("../../assets/logos/plus.png")}
            />
            <span>total</span>
          </div>
          <div className="basket-item">
            <div className="basket-item-img">
              <img
                width="50px"
                height="50px"
                src="https://www.bigbasket.com/media/uploads/p/xxl/40016670_6-disano-olive-oil-extra-virgin.jpg"
                alt="basket-item"
              />
            </div>

            <span className="basket-item-name">Oleev Oil</span>
            <img
              className="qty-dec"
              src={require("../../assets/logos/minus.png")}
            />
            <p>5</p>
            <img
              className="qty-inc"
              src={require("../../assets/logos/plus.png")}
            />
            <span>total</span>
          </div>
          <div className="basket-item">
            <div className="basket-item-img">
              <img
                width="50px"
                height="50px"
                src="https://www.bigbasket.com/media/uploads/p/xxl/40016670_6-disano-olive-oil-extra-virgin.jpg"
                alt="basket-item"
              />
            </div>

            <span className="basket-item-name">Oleev Oil</span>
            <img
              className="qty-dec"
              src={require("../../assets/logos/minus.png")}
            />
            <p>5</p>
            <img
              className="qty-inc"
              src={require("../../assets/logos/plus.png")}
            />
            <span>total</span>
          </div>
          <div className="basket-item">
            <div className="basket-item-img">
              <img
                width="50px"
                height="50px"
                src="https://www.bigbasket.com/media/uploads/p/xxl/40016670_6-disano-olive-oil-extra-virgin.jpg"
                alt="basket-item"
              />
            </div>

            <span className="basket-item-name">Oleev Oil</span>
            <img
              className="qty-dec"
              src={require("../../assets/logos/minus.png")}
            />
            <p>5</p>
            <img
              className="qty-inc"
              src={require("../../assets/logos/plus.png")}
            />
            <span>total</span>
          </div>
          <div className="basket-item">
            <div className="basket-item-img">
              <img
                width="50px"
                height="50px"
                src="https://www.bigbasket.com/media/uploads/p/xxl/40016670_6-disano-olive-oil-extra-virgin.jpg"
                alt="basket-item"
              />
            </div>

            <span className="basket-item-name">Oleev Oil</span>
            <img
              className="qty-dec"
              src={require("../../assets/logos/minus.png")}
            />
            <p>5</p>
            <img
              className="qty-inc"
              src={require("../../assets/logos/plus.png")}
            />
            <span>total</span>
          </div>
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
  UserReducer: state.UserReducer
});

export default connect(mapStateToProps)(Usercart);
