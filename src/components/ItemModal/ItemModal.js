// ItemModal renders the item image and title. The component accepts the following props:

// onClose (works the same way as the ModalWithForm)
// The item card data that you need to render
import "./ItemModal.css";

function ItemModal({ selectedCard, onClose }) {
  console.log(ItemModal);
  return (
    <div className={`modal`}>
      <div className="modal__content">
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
        <p className="modal__description">
          <span>{selectedCard.name}</span>
          <span>Weather: {selectedCard.weather}</span>
        </p>
      </div>
    </div>
  );
}

export default ItemModal;
