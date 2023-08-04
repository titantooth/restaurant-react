import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app-bg app-wrapper section-padding" id="chef">
    <div className="app-wrapper-img app-wrapper-img-reverse">
      <img src={images.chef} alt="chef image" />
    </div>
    <div className="app-wrapper-info">
      <SubHeading title={"Chef" + "s word"} />
      <h1 className="headtext-cormorant">What we believe in</h1>
      <div className="app-chef-content">
        <div className="app-chef-content-quote">
          <img src={images.quote} alt="quote" />
          <p className="p-opensans">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <p className="p-opensans">
          Corrupti, odit. Inventore provident natus, voluptatibus pariatur
          facere nihil eius ex repellat vitae cumque tempore soluta rerum
          architecto accusamus odit veniam at!
        </p>
      </div>
      <div className="app-chef-sign">
        <p>Kevin Lou</p>
        <p className="p-opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
