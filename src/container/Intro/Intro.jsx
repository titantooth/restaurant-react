import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const [style, setStyle] = React.useState("app-video-overlay");
  const vidRef = React.useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
      setStyle("app-video-overlay");

      // showvideo
    } else {
      vidRef.current.play();
      setStyle("app-video-overlay2");

      // hidevideo
    }
  };

  return (
    <div className="app-video">
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        ref={vidRef}
      />
      <div className={style}>
        <div
          className="app-video-overlay-circle flex-center"
          onClick={handleVideo}
          id="overlay"
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
