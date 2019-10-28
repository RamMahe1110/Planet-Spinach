import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Topbar.css";

class Topbar extends Component {
  state = {
    dropdown: false
  };

  onDropdownClick = () => {
    this.setState({ dropdown: !this.state.dropdown });
  };

  render() {
    return (
      <div className="topbar-whole">
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
          <div className="items-dropdown">
            <div onClick={this.onDropdownClick} className="item dropdown">
              <img
                src={require("../../assets/logos/dropdown.svg")}
                alt="dropdown"
                width="20px"
                height="20px"
              />
            </div>
          </div>
        </div>
        {this.state.dropdown ? (
          <ul className="responsive-items">
            <li>Home</li>
            <li>Category</li>
            <li>Login</li>
            <li>
              <img
                width="35px"
                height="35px"
                src={require("../../assets/logos/basket.png")}
                alt="shopping-basket"
              />
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Topbar);
