import React from 'react'
import Sidebaroptions from './Sidebaroptions'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./css/sidebar.css";

function Sidebar() {
  return (
    <div>
      <Sidebaroptions
        src="https://pbs.twimg.com/profile_images/1591100230594080768/38Lj8aFx_400x400.jpg"
        title="Estkhar Ansari"
      />
      <Sidebaroptions
        src="https://cdn0.iconfinder.com/data/icons/social-basic-2/32/Social_Media_Basic_Social_facebook__digital__Friends_-512.png"
        title="Friends"
      />
      <Sidebaroptions
        src="https://assets.materialup.com/uploads/0372beae-a303-48e6-b4db-c4ad6720a063/preview"
        title="Groups"
      />
      <Sidebaroptions
        src="https://cdn.iconscout.com/icon/free/png-256/free-facebook-watch-6745621-5575200.png"
        title="Watch"
      />
      <Sidebaroptions
        src="https://assets.materialup.com/uploads/6b3aa22f-92ba-4319-a546-3a1ebece132a/preview.png"
        title="Events"
      />
      <Sidebaroptions Icon={ExpandMoreIcon} title="see more..." />
    </div>
  );
}

export default Sidebar
