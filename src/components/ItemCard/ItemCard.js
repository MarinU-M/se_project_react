import "./ItemCard.css";
import likeBtn from "../../images/likeBtn.svg";
import Liked from "../../images/Liked.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ItemCard({ item, onSelectedCard, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  // Check if the item was liked by the current user
  // The likes array should be an array of ids
  const isLiked = item.likes.some((id) => id === currentUser._id);

  // Create a variable which you then set in `className` for the like button
  const itemLikeBtnClassName = `item__like ${
    !isLoggedIn && "item__like_hidden"
  }`;
  const itemLikeBtnSrc = `${isLiked ? Liked : likeBtn}`;

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
        <img
          src={itemLikeBtnSrc}
          alt="like button"
          className={itemLikeBtnClassName}
          onClick={() => onCardLike(item)}
        />
      </div>
    </li>
  );
}

export default ItemCard;
