import React from "react";
import { images } from "../../constants";
const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p-cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon-image" />
  </div>
);

export default SubHeading;
