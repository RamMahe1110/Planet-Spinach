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
            Veggies are here to change your life.
            <span className="discount"> Get 20% off on all veggies</span>
          </h1>
          <p>Checkout our Organic Vegetables</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps)(Homepage);
