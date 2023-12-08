import "./LoginModal.css";
import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onSubmit, onAltOptionBtn, isLoading }) {
  // declare state for each input field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // use a useEffect hook to reset the input field state to empty strings when
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  // the modal is opened
  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  // create onChange handlers corresponding to each state variable

  const handleSubmit = (evt) => {
    // prevent default behavior
    evt.preventDefault();
    // call onAddItem with appropriate arguments
    onSubmit({ email, password });
  };
  return (
    <ModalWithForm
      title="Log in"
      name="log-in"
      onClose={onClose}
      isOpen={isOpen}
      btnText={isLoading ? "Logging in..." : "Log in"}
      onSubmit={handleSubmit}
      altOptionBtn="or Register"
      onAltOptionBtn={onAltOptionBtn}
    >
      <label className="modal__label">
        Email
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
        Password
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
    </ModalWithForm>
  );
}

export default LoginModal;
