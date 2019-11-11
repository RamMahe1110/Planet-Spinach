import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { onUserLogout } from "../../redux/User/UserActions";
import "./Topbar.css";

class Topbar extends Component {
  state = {
    dropdown: false
  };

  onDropdownClick = () => {
    this.setState({ dropdown: !this.state.dropdown });
  };

  onLogoutClick = () => {
    this.props.onUserLogout();
  };

  render() {
    const { currentUser } = this.props.UserReducer;
    return (
      <div className="topbar-whole">
        <div className="topbar">
          <Link to="/" className="logo">
            <h5>PlanetSpinach</h5>
            <img src={require("../../assets/logos/leaf.png")} alt="logo" />
          </Link>
          <div className="items">
            <Link to="/" className="item">
              Home
            </Link>
            <Link to="/category/all" className="item">
              Category
            </Link>
            {currentUser === null ? (
              <Link to="/auth/login" className="item">
                Login
              </Link>
            ) : (
              <p className="item" onClick={this.onLogoutClick}>
                Logout
              </p>
            )}

            <Link to="/userbasket" className="item">
              <img
                src={require("../../assets/logos/basket.png")}
                alt="shopping-basket"
              />
            </Link>
          </div>
          <div className="items-dropdown">
            <div onClick={this.onDropdownClick} className="item dropdown">
              <img
                src={require("../../assets/logos/dropdown.png")}
                alt="dropdown"
                width="20px"
                height="20px"
              />
            </div>
          </div>
        </div>
        {this.state.dropdown ? (
          <ul className="responsive-items">
            <Link onClick={this.onDropdownClick} to="/" className="res-link">
              Home
            </Link>
            <Link
              onClick={this.onDropdownClick}
              to="/category/all"
              className="res-link"
            >
              Category
            </Link>
            {currentUser === null ? (
              <Link
                onClick={this.onDropdownClick}
                to="/auth/login"
                className="res-link"
              >
                Login
              </Link>
            ) : (
              <p className="res-link" onClick={this.onLogoutClick}>
                Logout
              </p>
            )}
            <Link
              onClick={this.onDropdownClick}
              to="/userbasket"
              className="res-link"
            >
              <img
                width="35px"
                height="35px"
                src={require("../../assets/logos/basket.png")}
                alt="shopping-basket"
              />
            </Link>
          </ul>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  UserReducer: state.UserReducer
});

export default connect(
  mapStateToProps,
  { onUserLogout }
)(Topbar);
