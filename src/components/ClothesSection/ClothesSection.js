import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

function ClothesSection() {
  return (
    <div className="clothes-section">
      <div className="clothes-section__title">
        <h2 className="clothes-section__heading">Your items</h2>
        <button /*onClick={onClickModal}*/ className="clothes-section__addBtn">
          + Add new
        </button>
      </div>
      <ul className="clothes-section__card-list">
        {defaultClothingItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            /*onSelectedCard={onSelectedCard}*/
          />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
