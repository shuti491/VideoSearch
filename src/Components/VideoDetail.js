import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading</div>;
  }

  const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="embed">
        <iframe src={VideoSrc} title="VideoPlayer" />
      </div>
      <div className="segment">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
