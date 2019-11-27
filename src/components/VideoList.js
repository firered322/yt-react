import React from "react";
import VideoFile from "./VideoFile";

const VideoList = props => {
  const renderedVideoList = props.videos.map(video => {
    return <VideoFile video={video} />;
  });
  return <div>{renderedVideoList}</div>;
};

export default VideoList;
