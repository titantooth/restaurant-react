import React from "react";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import "./Laurels.css";
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app-laurels-awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app-laurels-awards-card-content">
      <p className="p-cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p-cormorant">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app-bg app-wrapper section-padding" id="awarsd">
    <div className="app-wrapper-info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext-cormorant">Our Laurels</h1>
      <div className="app-laurels-awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className="app-wrapper-img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
