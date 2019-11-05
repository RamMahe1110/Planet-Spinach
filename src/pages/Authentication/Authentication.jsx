import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { changeFooterClass } from "./../../redux/Footer/FooterAction";
import SignUp from "./../../components/SignUp/SignUp";
import Login from "./../../components/Login/Login";
import "./Authentication.css";

class Authentication extends Component {
  componentDidMount() {
    this.props.changeFooterClass("footer");
  }

  componentWillUnmount() {
    this.props.changeFooterClass(null);
  }

  render() {
    return (
      <div>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/signup" component={SignUp} />
      </div>
    );
  }
}

export default connect(
  null,
  { changeFooterClass }
)(Authentication);
