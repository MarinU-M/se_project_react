import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeatherForecast, roundTemperature } from "../../utils/weatherApi";

function App() {
  // const weatherTemp = "100";
  const [activeModal, setActiveModal] = useState("");
  const handleOpenModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const [selectedCard, setSelectedCard] = useState({});
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const [temp, setTemp] = useState(0);
  useEffect(() => {
    getWeatherForecast().then((data) => {
      const temperature = roundTemperature(data);
      setTemp(temperature);
    });
  }, []);

  return (
    <>
      <div className="app">
        <Header onClickModal={handleOpenModal} />
        <Main weatherTemp={temp} onSelectedCard={handleSelectedCard} />
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
                name="link"
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
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClickModal={handleCloseModal}
          />
        )}
      </div>
    </>
  );
}

export default App;
