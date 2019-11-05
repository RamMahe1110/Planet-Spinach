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

const mapStateToProps = state => ({
  UserReducer: state.UserReducer
});

export default connect(
  mapStateToProps,
  { onUserLogout }
)(Topbar);
