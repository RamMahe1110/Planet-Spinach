import React, { Component } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";

class Topbar extends Component {
  state = {};
  render() {
    return (
      <div className="topbar">
        <div className="logo">
          <h5>PlanetSpinach</h5>
          <img
            src={require("../../assets/logos/spinach-logo.png")}
            alt="logo"
          />
        </div>
        <div className="items">
          <Link to="/" className="item">
            Home
          </Link>
          <Link to="/category/all" className="item">
            Category
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

export default Topbar;
