import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>

      <p> {topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://img.freepik.com/free-vector/watercolor-stains-abstract-background_23-2149107181.jpg?w=2000"
          alt=""
        />

        <Avatar className="sidebar__avatar" />
        <h2>Adam Miled</h2>

        <h4>Adam.miled53@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p> Who viewed you</p>
          <p className="sidebar__statnumber">235</p>
        </div>

        <div className="sidebar__stat">
          <p> Views on Post</p>
          <p className="sidebar__statnumber">12 535</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("ReactJs")}
        {recentItem("Angular")}
        {recentItem("Software Engineering")}
        {recentItem("UX/UI design")}
      </div>
    </div>
  );
}

export default Sidebar;
