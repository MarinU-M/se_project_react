import React from "react";
import "./SideBar.css";
import avatar from "../../images/avatar.svg";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar() {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <img src={currentUser.avatar} alt="avatar" className="sidebar__avatar" />
      <h1 className="sidebar__name">{currentUser.name}</h1>
    </div>
  );
}

export default SideBar;
