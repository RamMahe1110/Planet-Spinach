import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { onUserLogin, setErrToNull } from "../../redux/User/UserActions";
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
    const { email, password } = this.state;
    if (!validator.isEmail(email)) {
      this.setState({
        emailErr: "Please enter a valid email :(",
        passErr: null
      });
      this.props.setErrToNull();
      return;
    } else {
      this.setState({ emailErr: null });
    }

    if (!validator.isLength(password, { min: 6 })) {
      this.setState({
        passErr: "Password must be atleast 6 characters long :(",
        emailErr: null
      });
      this.props.setErrToNull();
      return;
    } else {
      this.setState({ passErr: null });
    }

    const data = { email, password };
    this.props.onUserLogin(data);
  };

  render() {
    const { loginErr } = this.props.UserReducer;
    return (
      <div className="main">
        {loginErr ? <span className="errr">{loginErr}</span> : null}
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

const mapStateToProps = state => ({
  UserReducer: state.UserReducer
});

export default connect(
  mapStateToProps,
  { onUserLogin, setErrToNull }
)(Login);
