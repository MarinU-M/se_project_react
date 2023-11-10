import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ isOpen, onAddItem, onClose, isLoading }) {
  // declare state for each input field
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [weather, setweather] = useState("");

  // use a useEffect hook to reset the input field state to empty strings when
  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  // the modal is opened
  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleLinkChange = (evt) => {
    setLink(evt.target.value);
  };

  const handleRadioChange = (evt) => {
    setweather(evt.target.value);
  };
  // create onChange handlers corresponding to each state variable

  const handleSubmit = (evt) => {
    // prevent default behavior
    evt.preventDefault();
    // call onAddItem with appropriate arguments
    onAddItem({ name, link, weather });
  };

  return (
    <ModalWithForm
      title="New garment"
      name="add-garment"
      onClose={onClose}
      isOpen={isOpen}
      btnText={isLoading ? "Saving..." : "Add garment"}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          placeholder="Name"
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__label">
        Image
        <input
          className="modal__input"
          type="url"
          name="link"
          minLength="1"
          placeholder="Image URL"
          required
          value={link}
          onChange={handleLinkChange}
        />
      </label>
      <h4 className="modal__radio-title">Select the weather type:</h4>
      <ul className="modal__radio-list">
        <li className="modal__radio-item">
          <label className="modal__radio-label">
            <input
              type="radio"
              name="weather"
              id="hot"
              value="hot"
              onChange={handleRadioChange}
            />
            Hot
          </label>
        </li>
        <li className="modal__radio-item">
          <label className="modal__radio-label">
            <input
              type="radio"
              name="weather"
              id="warm"
              value="warm"
              onChange={handleRadioChange}
            />
            Warm
          </label>
        </li>
        <li className="modal__radio-item">
          <label className="modal__radio-label">
            <input
              type="radio"
              name="weather"
              id="cold"
              value="cold"
              onChange={handleRadioChange}
            />
            Cold
          </label>
        </li>
      </ul>
    </ModalWithForm>
  );
}

export default AddItemModal;
