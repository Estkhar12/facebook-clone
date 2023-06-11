import React from 'react'
import "./css/header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Avatar, IconButton } from '@mui/material';
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ForumIcon from "@mui/icons-material/Forum";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";



function Header() {
  return (
    <div className="header">
      <div className="left_header">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          alt=""
        />
        <div className="search_header">
          <SearchIcon />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="middle_header">
        <div className="header_option header_option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <OndemandVideoIcon fontSize="large" />
        </div>
        <div className="header_option">
          <GroupsIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SportsEsportsIcon fontSize="large" />
        </div>
      </div>
      <div className="right_header">
        <div className="header_info">
          <Avatar src="https://pbs.twimg.com/profile_images/1591100230594080768/38Lj8aFx_400x400.jpg" />
          <h5>Estkhar Ansari</h5>
        </div>

        <IconButton>
          <AppsIcon />
        </IconButton>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header
