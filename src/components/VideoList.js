import React from "react";
import VideoFile from "./VideoFile";

const VideoList = props => {
  const renderedVideoList = props.videos.map(video => {
    return (
      <VideoFile
        key={video.id.videoId}
        onVideoSelect={props.onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedVideoList}</div>;
};

export default VideoList;
