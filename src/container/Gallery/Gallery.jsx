import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import "./Gallery.css";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app-gallery flex-center">
      <div className="app-gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext-cormorant">Photo Gallery</h1>
        <p className="p-opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aut
          quas corrupti magnam voluptas aperiam nostrum sint. Quas blanditiis
          optio modi, praesentium facere ullam enim vitae unde possimus
          reiciendis quam.
        </p>
        <button type="button" className="custom-button">
          View More
        </button>
      </div>
      <div className="app-gallery-images">
        <div className="app-gallery-images-container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app-gallery-images-card flex-center"
              key={"gallery_image-" + index + 1}
            >
              <img src={image} alt="gallery image" />

              <BsInstagram className="gallery-image-icon" />
            </div>
          ))}
        </div>
        <div className="app-gallery-images-arrows">
          <BsArrowLeftShort
            className="gallery-arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery-arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
