import React from "react";
import "./SideBar.css";
import avatar from "../../images/avatar.svg";

function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatar} alt="avatar" className="sidebar__avatar" />
      <h1 className="sidebar__name">Marin Umegane</h1>
    </div>
  );
}

export default SideBar;
