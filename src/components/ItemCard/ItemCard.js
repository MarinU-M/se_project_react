// the image is an interactive element, meaning that if the user clicks on it, the item modal will open.
// Note that the item card itself doesn’t know about the modal state. Therefore, you need to pass it down from App to Main.
// when the user clicks on the image, you need to call the state change function handleCardClick() that ItemCard receives as a prop.

import "./ItemCard.css";
import likeBtn from "../../images/likeBtn.svg";

function ItemCard({ item, onSelectedCard }) {
  return (
    <li className="item__card">
      <img
        className="item__image"
        src={item.link}
        alt={item.name}
        onClick={() => onSelectedCard(item)}
      />
      <div className="item__label">
        <p className="item__name">{item.name}</p>
        <img src={likeBtn} alt="like button" className="item__like" />
      </div>
    </li>
  );
}

export default ItemCard;
