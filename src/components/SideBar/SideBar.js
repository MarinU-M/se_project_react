import React from "react";
import "./SideBar.css";
// import avatar from "../../images/avatar.svg";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ onLogOut, onClickChangeProfile }) {
  const { name, avatar } = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__user">
        {avatar ? (
          <img src={avatar} alt="avatar" className="sidebar__avatar" />
        ) : (
          <div className="sidebar__avatar">
            <p className="sidebar__place-holder">{name[0].toUpperCase()}</p>
          </div>
        )}

        <h1 className="sidebar__name">{name}</h1>
      </div>
      <button className="sidebar__btns" onClick={onClickChangeProfile}>
        Change profile data
      </button>
      <button className="sidebar__btns" onClick={onLogOut}>
        Log out
      </button>
    </div>
  );
}

export default SideBar;
