import { Avatar, IconButton, Modal } from "@mui/material";
import React, { useState } from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MoodIcon from "@mui/icons-material/Mood";
import CloseIcon from "@mui/icons-material/Close";
import "./css/messagesender.css";

function MessageSender() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false)
  };

  const handleOpen = () =>{
    setOpen(true)
  }
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className="model_pop">
          <form action="">
            <div className="modelHeading">
              <h3>Create Post</h3>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="modelHeader_top">
              <Avatar />
              <h5>Estkhar Ansari</h5>
            </div>
            <div className="modelBody">
              <textarea rows="5" placeholder="What's on your mind Estkhar?" />
            </div>
            <div className="modelFooter">
              <div className="modelFooterLeft">
                <h4>Add to your post!</h4>
              </div>
              <div className="modelFooterRight">
                <IconButton>
                  <PhotoLibraryIcon
                    fontSize="large"
                    style={{ color: "lightGreen" }}
                  />
                  <VideoCallIcon fontSize="large" style={{ color: "red" }} />
                  <MoodIcon fontSize="large" style={{ color: "#ffb100" }} />
                </IconButton>
              </div>
            </div>
            <input type="submit" className="post_submit"  value="post" />
          </form>
        </div>
      </Modal>

      <div className="messagesender">
        <div className="messagesender_top">
          <Avatar />
          <form>
            <input type="text" placeholder="What's on your mind Estkhar!" onClick={handleOpen} />
          </form>
        </div>
        <div className="messagesender_bottom">
          <div className="messangerOptions">
            <VideoCallIcon style={{ color: "red" }} fontSize="large" />
            <p>Live video</p>
          </div>
          <div className="messangerOptions">
            <PhotoLibraryIcon
              style={{ color: "lightgreen" }}
              fontSize="large"
            />
            <p>Photo/Video</p>
          </div>
          <div className="messangerOptions">
            <MoodIcon style={{ color: "#ffb100" }} fontSize="large" />
            <p>Feelig/Activity</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageSender;
