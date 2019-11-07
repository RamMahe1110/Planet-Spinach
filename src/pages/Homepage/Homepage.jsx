import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Homepage.css";
import HomePrdPreview from "./../../components/HomePrdPreview/HomePrdPreview";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div className="homepage">
        <div className="top-content">
          <h1>One Stop for All Healthy Cravings</h1>
          <Link to="/category/all">
            <p>Grab Now</p>
          </Link>
        </div>
        <HomePrdPreview />
        <div className="middle-content">
          <h1>
            <span className="hider">
              Veggies are here to change your life.{" "}
            </span>
            <span className="discount"> Get 20% off on all veggies</span>
          </h1>
          <Link to="/category/5">Checkout our Organic Vegetables</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps)(Homepage);
