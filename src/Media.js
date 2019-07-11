import React from "react";
import ReactPlayer from "react-player";

const Media = ({ media, type }) => {
  return (
    <div>
      {type === "video" ? <ReactPlayer url={media} /> : <img src={media} alt="Nasa Photo of the day"/>}
    </div>
  );
};

export default Media;
