import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    if (!validator.isLength(this.state.name, { min: 3 })) {
      this.setState({ nameErr: "Name should be atleast 3 characters long :(" });
      return;
    } else {
      this.setState({ namelErr: null });
    }

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
      <div className="main-signup">
        <div className="form-signup">
          <div className="form-field-signup">
            <p>Name</p>
            <input
              onInput={this.onSubmit}
              className="text-field-signup"
              name="name"
              type="text"
            />
            <span>{this.state.nameErr}</span>
          </div>
          <div className="form-field-signup">
            <p>Email</p>
            <input
              onInput={this.onSubmit}
              className="text-field-signup"
              name="email"
              type="text"
            />
            <span>{this.state.emailErr}</span>
          </div>
          <div className="form-field-signup">
            <p>Password</p>
            <input
              onInput={this.onSubmit}
              className="text-field-signup"
              name="password"
              type="password"
            />
            <span>{this.state.passErr}</span>
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
