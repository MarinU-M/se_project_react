import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
// import { defaultClothingItems } from "../../utils/constants";

function ClothesSection({
  onSelectedCard,
  clothingItems,
  onClickModal,
  onCardLike,
  isLoggedIn,
}) {
  const currentContext = useContext(CurrentUserContext);
  const currentUserId = currentContext?._id;
  const filteredItems = clothingItems.filter(
    (item) => item.owner === currentUserId
  );
  return (
    <div className="clothes-section">
      <div className="clothes-section__title">
        <h2 className="clothes-section__heading">Your items</h2>
        <button onClick={onClickModal} className="clothes-section__addBtn">
          + Add new
        </button>
      </div>
      <ul className="clothes-section__card-list">
        {filteredItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onSelectedCard={onSelectedCard}
            onCardLike={onCardLike}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
