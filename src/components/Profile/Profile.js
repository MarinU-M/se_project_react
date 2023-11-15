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
  onCardLike,
  isLoggedIn,
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
        onCardLike={onCardLike}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
}

export default Profile;
