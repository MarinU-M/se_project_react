// ItemModal renders the item image and title. The component accepts the following props:

// onClose (works the same way as the ModalWithForm)
// The item card data that you need to render
import "./ItemModal.css";

function ItemModal({ selectedCard, onClose, onDelete }) {
  const handleDeleteSubmit = () => onDelete(selectedCard);
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
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <div className="modal__text">
          <p className="modal__description">
            <span>{selectedCard.name}</span>
            <span>Weather: {selectedCard.weather}</span>
          </p>
          <button
            className={`modal__btn modal__deleteBtn`}
            onClick={handleDeleteSubmit}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
