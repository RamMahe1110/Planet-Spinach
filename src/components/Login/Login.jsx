import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <div className="form">
          <div className="form-field">
            <p>Email</p>
            <input className="text-field" name="email" type="text" />
          </div>
          <div className="form-field">
            <p>Password</p>
            <input className="text-field" name="password" type="password" />
          </div>
          <p className="submit">Login</p>
          <p className="or">or</p>
          <Link to="/auth/signup" className="sign-up">
            Create New Account
          </Link>
          <p className="underline"></p>
        </div>
      </div>
    );
  }
}

export default Login;
