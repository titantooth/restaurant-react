import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const FindUs = () => (
  <div className="app-bg app-wrapper section-padding" id="contact">
    <div className="app-wrapper-info">
      <SubHeading title="contact" />
      <h1 className="headtext-cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app-wrapper-content">
        <p className="p-opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <p
          className="p-cormorant"
          style={{ color: "#dcca87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>

        <p className="p-opensans">Lorem ipsum</p>
        <p className="p-opensans">Lorem impsum</p>
      </div>
      <button style={{ marginTop: "2rem" }} className="custom-button">
        Visit Us
      </button>
    </div>
    <div className="app-wrapper-img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
