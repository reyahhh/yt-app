import React from "react";
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui small image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">{video.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
