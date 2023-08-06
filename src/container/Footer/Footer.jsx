import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";

const Footer = () => (
  <div className="app-footer section-padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app-footer-links">
      <div className="app-footer-links-contact">
        <h1 className="app-footer-headtext">contact us</h1>
        <p className="p-opensans">some generic address</p>
        <p className="p-opensans">some phone number</p>
        <p className="p-opensans">some other phone #</p>
      </div>
      <div className="app-footer-links-logo">
        <img src={images.gericht} alt="footer-logo" />
        <p className="p-opensans">
          "the best way to find yourself is to lose yourself in the service of
          others."
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon-image"
          style={{ marginTop: 15 }}
        />
        <div className="app-footer-links-icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app-footer-links-work">
        <h1 className="app-footer-headtext">Working Hours</h1>
        <p className="p-opensans">some days</p>
        <p className="p-opensans">some generic hours</p>
        <p className="p-opensans">some other days</p>
        <p className="p-opensans">some generic hours</p>
      </div>
    </div>
    <div className="footer-copyright">
      <p className="p-opensans">
        2023 generic restaurant Rabiee All rights reserved :D
      </p>
    </div>
  </div>
);

export default Footer;
