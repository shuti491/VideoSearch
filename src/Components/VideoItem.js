import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <>
      <div onClick={() => onVideoSelect(video)} className="item">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <div className="title">{video.snippet.title}</div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default VideoItem;
