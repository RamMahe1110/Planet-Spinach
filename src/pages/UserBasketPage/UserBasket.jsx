import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./UserBasket.css";

class Usercart extends Component {
  render() {
    const { currentUser } = this.props.UserReducer;

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
      <div>
        <h1>Basket</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  UserReducer: state.UserReducer
});

export default connect(mapStateToProps)(Usercart);
