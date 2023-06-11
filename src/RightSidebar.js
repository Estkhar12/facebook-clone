import React from "react";
import "./css/right.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VideocamIcon from "@mui/icons-material/Videocam";
import SearchIcon from "@mui/icons-material/Search";

function RightSidebar() {
  return (
    <div className="widget">
      <div className="widget_header">
        <div className="widget_headerLeft">
          <h4>Your pages</h4>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="widget_body">
        <div className="widget_bodyOptions">
          <Avatar src="https://burst.shopifycdn.com/photos/man-takes-time-to-ponder.jpg?width=925&exif=1&iptc=1" />
          <p>InfoRetina Coder</p>
        </div>
      </div>
      <div className="widget_body">
        <div className="widget_bodyOptions mb">
          <NotificationsNoneIcon />
          <p>Notifications</p>
        </div>
      </div>
      <div className="widget_body">
        <div className="widget_bodyOptions mb">
          <VolumeUpIcon />
          <p>Create Promotions</p>
        </div>
      </div>
      <hr />
      <div className="widget_middle">
        <div className="widget_headerLeft">
          <h4>Contact</h4>
        </div>
        <div className="widget_headerRight">
          <VideocamIcon />
          <SearchIcon />
          <MoreHorizIcon />
        </div>
      </div>
      <div className="widget_body">
        <div className="widget_bodyOptions">
          <Avatar src="https://burst.shopifycdn.com/photos/man-takes-time-to-ponder.jpg?width=925&exif=1&iptc=1" />
          <p>Johny Bangule</p>
        </div>
      </div>
      <div className="widget_body">
        <div className="widget_bodyOptions">
          <Avatar src="https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <p>Arhi Quadari</p>
        </div>
        <div className="widget_body">
          <div className="widget_bodyOptions">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuOUZbhzRCOhBVdi6vd19lzymdRoFGs9BwWWuGJZw&s" />
            <p>Bangela white</p>
          </div>
        </div>
        <div className="widget_body">
          <div className="widget_bodyOptions">
            <Avatar src="https://play-lh.googleusercontent.com/UjaAdTYsArv7zAJbqGWjQw2ftuOtnAlvokffC3TQQ2K12mwk0YdXUF2wZBTBA2kDZIk" />
            <p>Sumonio Prade</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
