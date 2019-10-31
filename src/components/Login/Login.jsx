import React, { Component } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import "./Login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    emailErr: null,
    passErr: null
  };

  onInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    if (!validator.isEmail(this.state.email)) {
      this.setState({ emailErr: "Please enter a valid email :(" });
      return;
    } else {
      this.setState({ emailErr: null });
    }

    if (!validator.isLength(this.state.password, { min: 6 })) {
      this.setState({
        passErr: "Password must be atleast 6 characters long :("
      });
      return;
    } else {
      this.setState({ passErr: null });
    }
  };

  render() {
    return (
      <div className="main">
        <div className="form">
          <div className="form-field">
            <p>Email</p>
            <input
              onInput={this.onInput}
              className="text-field"
              name="email"
              type="text"
            />
            <span>{this.state.emailErr}</span>
          </div>
          <div className="form-field">
            <p>Password</p>
            <input
              onInput={this.onInput}
              className="text-field"
              name="password"
              type="password"
            />
            <span>{this.state.passErr}</span>
          </div>
          <p onClick={this.onSubmit} className="submit">
            Login
          </p>
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
