import "./RegisterModal.css";
import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  isOpen,
  onClose,
  onSubmit,
  isLoading,
  onAltOptionBtn,
}) {
  // declare state for each input field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  // use a useEffect hook to reset the input field state to empty strings when
  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
    setLink("");
  }, [isOpen]);

  // the modal is opened
  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleLinkChange = (evt) => {
    setLink(evt.target.value);
  };

  // create onChange handlers corresponding to each state variable

  const handleSubmit = (evt) => {
    // prevent default behavior
    evt.preventDefault();
    onSubmit({ email, password, name, link });
  };
  return (
    <ModalWithForm
      title="Sign up"
      name="sign-up"
      onClose={onClose}
      isOpen={isOpen}
      btnText={isLoading ? "Next..." : "Next"}
      onSubmit={handleSubmit}
      altOptionBtn="or Log In"
      onAltOptionBtn={onAltOptionBtn}
    >
      <label className="modal__label">
        Email*
        <input
          className="modal__input"
          type="email"
          name="Email"
          minLength="1"
          placeholder="Email"
          required
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label className="modal__label">
        Password*
        <input
          className="modal__input"
          type="text"
          name="password"
          minLength="1"
          placeholder="Password"
          required
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <label className="modal__label">
        Name
        <input
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__label">
        Avatar URL
        <input
          className="modal__input"
          type="url"
          name="link"
          minLength="1"
          placeholder="Avatar URL"
          value={link}
          onChange={handleLinkChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
