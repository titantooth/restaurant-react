import React from "react";
import Subheading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app-newsletter">
    <div className="app-newsletter-heading">
      <Subheading title="Newsletter" />
      <h1 className="headtext-cormorant">Subscribe to our newsletter</h1>
      <p className="p-opensans">And never miss latest updates</p>
    </div>
    <div className="app-newsletter-input flex-center">
      <input type="email" placeholder="Enter your email address" />
      <button className="custom-button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
