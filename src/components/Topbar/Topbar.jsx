import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Topbar.css";

class Topbar extends Component {
  render() {
    return (
      <div className="topbar">
        <div className="logo">
          <h5>PlanetSpinach</h5>
          <img src={require("../../assets/logos/leaf.png")} alt="logo" />
        </div>
        <div className="items">
          <Link to="/" className="item">
            Home
          </Link>
          <Link to="/category/all" className="item">
            Category
          </Link>
          <Link to="/auth/login" className="item">
            Login
          </Link>
          <div className="item">
            <img
              src={require("../../assets/logos/basket.png")}
              alt="shopping-basket"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Topbar);
