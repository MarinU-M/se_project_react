import React from "react";
import "./DeleteConfirmationModal.css";

function DeleteConfirmationModal({ onClose, isOpen, onSubmit, selectedCard }) {
  const handleDeleteItem = () => {
    onSubmit(selectedCard);
  };

  return (
    <div className="modal" onClick={onClose}>
      <div
        className={`modal__content modal_type_confirmation`}
        onClick={(evt) => evt.stopPropagation()}
      >
        {/* modal close button for clicks on button, outside of the modal, or presses Esc*/}
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <p className="modal__caution">
          <span>Are you sure you want to delete this item?</span>
          <span>This action is irreversible.</span>
        </p>
        <div className="modal__options">
          <button
            className={`modal__btn modal__delete`}
            type="button"
            onClick={handleDeleteItem}
          >
            Yes, delete item
          </button>
          <button
            className={`modal__btn modal__cancel`}
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
