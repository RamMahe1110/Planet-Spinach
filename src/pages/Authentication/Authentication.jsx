import React, { Component } from "react";
import { Route } from "react-router-dom";
import SignUp from "./../../components/SignUp/SignUp";
import Login from "./../../components/Login/Login";
import "./Authentication.css";

class Authentication extends Component {
  state = {};
  render() {
    return (
      <div>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/signup" component={SignUp} />
      </div>
    );
  }
}

export default Authentication;
