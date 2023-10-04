import React from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile(onSelectedCard) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection onSelectedCard={onSelectedCard} />
    </div>
  );
}

export default Profile;
