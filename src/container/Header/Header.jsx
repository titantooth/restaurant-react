import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div id="home" className="app-header app-wrapper section__padding">
    <div className="app-wrapper-info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app-header-h1">The Key to Fine Dining</h1>
      <p className="p-opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ullam
        blanditiis culpa modi possimus dolore quos quaerat quae qui ea minus
        accusamus est, inventore quam in fugiat aliquam, autem dignissimos.
      </p>
      <button type="button" className="custom-button">
        Explore Menu
      </button>
    </div>
    <div className="app-wrapper-img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
