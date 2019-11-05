import React from "react";
import { connect } from "react-redux";
import "./Footer.css";

const Footer = props => {
  return (
    <div className={`${props.FooterReducer.class}`}>
      <div className="sub-footer">
        <div className="brand-hl">
          <h2>PlanetSpinach</h2>
          <img src={require("../../assets/logos/leaf.png")} alt="logo" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  FooterReducer: state.FooterReducer
});

export default connect(mapStateToProps)(Footer);
