import { Avatar } from "@mui/material";
import React from "react";
import "./css/story.css";

function Storyreel() {
  return (
    <div className="storyReel">
      <div
        className="story"
        style={{
          backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20210101/pngtree-double-row-tree-path-with-yellow-deciduous-autumn-leaves-image_519106.jpg')`,
        }}
      >
        <Avatar />
        <h4>Estkhar Ansari</h4>
      </div>
      <div
        className="story"
        style={{
          backgroundImage: `url('https://thumbs.dreamstime.com/b/tile-floor-brick-wall-background-lights-night-hd-image-large-resolution-can-be-used-as-desktop-wallpaper-real-zise-184215885.jpg')`,
        }}
      >
        <Avatar />
        <h4>Afzal Imam</h4>
      </div>
      <div
        className="story"
        style={{
          backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOdJhd4oFIdRY7FgK35AcMhdsihMCC91MPEVeO2ti3&s')`,
        }}
      >
        <Avatar />
        <h4>Nehal Ahamad</h4>
      </div>
      <div
        className="story"
        style={{
          backgroundImage: `url('https://m.media-amazon.com/images/I/31qu4ixHZ3L._SY355_.jpg')`,
        }}
      >
        <Avatar />
        <h4>Arbaj khan</h4>
      </div>
      <div
        className="story"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1631631480669-535cc43f2327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww&w=1000&q=80')`,
        }}
      >
        <Avatar />
        <h4>Intejar Ansari</h4>
      </div>
    </div>
  );
}

export default Storyreel;
