import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="app-aboutus app-bg flex-center section-padding" id="about">
    <div className="app-aboutus-overlay flex-center">
      <img src={images.G} alt="G" />
    </div>
    <div className="app-aboutus-content flex-center">
      <div className="app-aboutus-content-about">
        <h1 className="headtext-cormorant">About Us</h1>
        <img src={images.spoon} alt="about spoon" className="spoon-image" />
        <p className="p-opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, animi
          eos reprehenderit atque voluptatem rerum eligendi natus, ipsum,
          corporis tempora autem laudantium blanditiis recusandae. Molestiae
          illo rerum accusamus id praesentium.
        </p>
        <button type="button" className="custom-button">
          No More
        </button>
      </div>

      <div className="app-aboutus-content-knife flex-center">
        <img src={images.knife} alt="about knife" />
      </div>
      <div className="app-aboutus-content-history">
        <h1 className="headtext-cormorant">Our history</h1>
        <img src={images.spoon} alt="about spoon" className="spoon-image" />
        <p className="p-opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, animi
          eos reprehenderit atque voluptatem rerum eligendi natus, ipsum,
          corporis tempora autem laudantium blanditiis recusandae. Molestiae
          illo rerum accusamus id praesentium.
        </p>
        <button type="button" className="custom-button">
          No More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
