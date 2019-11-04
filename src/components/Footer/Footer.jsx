import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="brand-hl">
        <h2>PlanetSpinach</h2>
        <img src={require("../../assets/logos/leaf.png")} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
