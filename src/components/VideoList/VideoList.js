import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "../VideoItem/VideoItem";

export default ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map(video => (
    <div>
      <VideoItem
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
        video={video}
      />
    </div>
  ));

  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
}