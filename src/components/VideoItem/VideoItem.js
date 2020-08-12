import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div>
      <Grid item xs={12}>
        <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)} >
          <img style={{ marginRight: "0.1em" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
          <Typography variant="subtitle1">
            <b>{video.snippet.title}</b>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}

export default VideoItem;