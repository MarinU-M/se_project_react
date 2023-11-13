import React from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  onSelectedCard,
  clothingItems,
  onClickModal,
  onLogOut,
  onClickChangeProfile,
}) {
  return (
    <div className="profile">
      <SideBar
        onClickChangeProfile={onClickChangeProfile}
        onLogOut={onLogOut}
      />
      <ClothesSection
        onSelectedCard={onSelectedCard}
        clothingItems={clothingItems}
        onClickModal={onClickModal}
      />
    </div>
  );
}

export default Profile;
