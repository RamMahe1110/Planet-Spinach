import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { onUserSignUp } from "./../../redux/User/UserActions";
import "./SignUp.css";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    nameErr: null,
    emailErr: null,
    passErr: null
  };

  onInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    const { name, email, password } = this.state;

    if (!validator.isLength(name, { min: 3 })) {
      this.setState({ nameErr: "Name should be atleast 3 characters long :(" });
      return;
    } else {
      this.setState({ nameErr: null });
    }

    if (!validator.isEmail(email)) {
      this.setState({ emailErr: "Please enter a valid email :(" });
      return;
    } else {
      this.setState({ emailErr: null });
    }

    if (!validator.isLength(password, { min: 6 })) {
      this.setState({
        passErr: "Password must be atleast 6 characters long :("
      });
      return;
    } else {
      this.setState({ passErr: null });
    }

    const data = { name, email, password };
    this.props.onUserSignUp(data);
  };
  render() {
    const { signupErr } = this.props.UserReducer;
    return (
      <div className="main-signup">
        {signupErr ? <span>{signupErr}</span> : null}
        <div className="form-signup">
          <div className="form-field-signup">
            <p>Name</p>
            <input
              onInput={this.onInput}
              className="text-field-signup"
              name="name"
              type="text"
            />
            <span>{this.state.nameErr}</span>
          </div>
          <div className="form-field-signup">
            <p>Email</p>
            <input
              onInput={this.onInput}
              className="text-field-signup"
              name="email"
              type="text"
            />
            <span>{this.state.emailErr}</span>
          </div>
          <div className="form-field-signup">
            <p>Password</p>
            <input
              onInput={this.onInput}
              className="text-field-signup"
              name="password"
              type="password"
            />
            <span>{this.state.passErr}</span>
          </div>
          <p onClick={this.onSubmit} className="submit-signup">
            Sign Up
          </p>

          <Link to="/auth/login" className="signup">
            Already a member? Login
          </Link>
          <p className="underline-signup"></p>
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
  { onUserSignUp }
)(SignUp);
