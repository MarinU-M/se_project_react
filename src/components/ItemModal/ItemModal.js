// ItemModal renders the item image and title. The component accepts the following props:

// onClose (works the same way as the ModalWithForm)
// The item card data that you need to render
import "./ItemModal.css";

function ItemModal({ selectedCard, onClose }) {
  console.log(ItemModal);
  return (
    <div className={`modal`} onClick={onClose}>
      <div
        className="item-modal__content"
        onClick={(evt) => evt.stopPropagation()}
      >
        <button
          className="item-modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="item-modal__image"
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <div className="item-modal__text">
          <p className="item-modal__description">
            <span>{selectedCard.name}</span>
            <span>Weather: {selectedCard.weather}</span>
          </p>
          <button className="item-modal__deleteBtn">Delete item</button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
