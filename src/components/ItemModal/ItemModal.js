import "./ItemModal.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ selectedCard, onClose, onDelete }) {
  const currentUser = useContext(CurrentUserContext);

  // Checking if the current user is the owner of the current clothing item
  const isOwn = selectedCard.owner === currentUser._id;
  console.log(isOwn);
  // Creating a variable which you'll then set in `className` for the delete button
  const itemDeleteButtonClassName = `modal__deleteBtn ${
    isOwn ? "modal__deleteBtn_visible" : "modal__deleteBtn_hidden"
  }`;

  return (
    <div className={`modal modal_type_item`} onClick={onClose}>
      <div className="modal__content" onClick={(evt) => evt.stopPropagation()}>
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__text">
          <p className="modal__description">
            <span>{selectedCard.name}</span>
            <span>Weather: {selectedCard.weather}</span>
          </p>
          <button
            className={itemDeleteButtonClassName}
            onClick={() => onDelete(selectedCard)}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
