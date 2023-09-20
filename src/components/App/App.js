import "./App.css";
import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const handleOpenModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  return (
    <>
      <div className="app">
        <Header onClickModal={handleOpenModal} />
        <Main />
        <Footer />
        {activeModal === "create" && (
          <ModalWithForm title="New garment" onClickModal={handleCloseModal}>
            <label className="modal__label">
              Name
              <input
                className="modal__input"
                type="text"
                name="name"
                minLength="1"
                placeholder="Name"
                required
              />
            </label>
            <label className="modal__label">
              Image
              <input
                className="modal__input"
                type="url"
                name="url"
                minLength="1"
                placeholder="Image URL"
                required
              />
            </label>
            <h4 className="modal__radio-title">Select the weather type:</h4>
            <ul className="modal__radio-list">
              <li className="modal__radio-item">
                <input type="radio" name="weather" id="hot" value="hot" />
                <label className="modal__radio-label">Hot</label>
              </li>
              <li className="modal__radio-item">
                <input type="radio" name="weather" id="warm" value="warm" />
                <label className="modal__radio-label">Warm</label>
              </li>
              <li className="modal__radio-item">
                <input type="radio" name="weather" id="cold" value="cold" />
                <label className="modal__radio-label">Cold</label>
              </li>
            </ul>
          </ModalWithForm>
        )}
      </div>
    </>
  );
}

export default App;
