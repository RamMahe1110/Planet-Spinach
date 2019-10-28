import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <div className="main-signup">
        <div className="form-signup">
          <div className="form-field-signup">
            <p>Name</p>
            <input className="text-field-signup" name="name" type="text" />
          </div>
          <div className="form-field-signup">
            <p>Email</p>
            <input className="text-field-signup" name="email" type="text" />
          </div>
          <div className="form-field-signup">
            <p>Password</p>
            <input
              className="text-field-signup"
              name="password"
              type="password"
            />
          </div>
          <p className="submit-signup">Sign Up</p>

          <Link to="/auth/login" className="signup">
            Already a member? Login
          </Link>
          <p className="underline-signup"></p>
        </div>
      </div>
    );
  }
}

export default SignUp;
