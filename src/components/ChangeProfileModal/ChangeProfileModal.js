// import "./RegisterModal.css";
import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function ChangeProfileModal({
  isOpen,
  onClose,
  onSubmit,
  isLoading,
  currentUser,
}) {
  // declare state for each input field
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  // use a useEffect hook to reset the input field state to empty strings when
  useEffect(() => {
    setName(currentUser.name);
    setAvatar(currentUser.avatar);
  }, [isOpen]);

  // the modal is opened
  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleAvatarChange = (evt) => {
    setAvatar(evt.target.value);
  };

  // create onChange handlers corresponding to each state variable

  const handleSubmit = (evt) => {
    // prevent default behavior
    evt.preventDefault();
    onSubmit({ name, avatar });
  };
  return (
    <ModalWithForm
      title="Change profile data"
      name="change-profile-data"
      onClose={onClose}
      isOpen={isOpen}
      btnText={isLoading ? "Saving..." : "Save changes"}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name*
        <input
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          placeholder="name"
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__label">
        Avatar
        <input
          className="modal__input"
          type="url"
          name="avatar"
          minLength="1"
          placeholder="Avatar URL"
          value={avatar}
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default ChangeProfileModal;
