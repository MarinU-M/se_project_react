import React from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection />
    </div>
  );
}

export default Profile;
