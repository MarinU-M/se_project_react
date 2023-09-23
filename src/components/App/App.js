import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import {
  getWeatherForecast,
  roundTemperature,
  getWeather,
  getTime,
  getPlace,
} from "../../utils/weatherApi";

function App() {
  // const weatherTemp = "100";
  const [activeModal, setActiveModal] = useState("");
  const handleOpenModal = () => {
    setActiveModal("create");
  };

  // handle close modal
  const handleCloseModal = () => {
    setActiveModal("");
  };
  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  });

  // card popup
  const [selectedCard, setSelectedCard] = useState({});
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  // set weather
  const [temp, setTemp] = useState(0);
  const [weatherType, setWeatherType] = useState("");
  const [time, setTime] = useState(null);
  const [address, setAddress] = useState("");
  useEffect(() => {
    getWeatherForecast()
      .then((data) => {
        const temperature = roundTemperature(data);
        const weather = getWeather(data);
        const time = getTime(data);
        const place = getPlace(data);

        setTemp(temperature);
        setWeatherType(weather);
        setTime(time);
        setAddress(place);
      })
      .catch((err) => {
        console.err(err);
      });
  }, []);

  return (
    <div className="app">
      <Header address={address} onClickModal={handleOpenModal} />
      <Main
        weatherTemp={temp}
        type={weatherType}
        day={time}
        onSelectedCard={handleSelectedCard}
      />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          title="New garment"
          name="add-garment"
          onClose={handleCloseModal}
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
              <label className="modal__radio-label">
                <input type="radio" name="weather" id="hot" value="hot" />
                Hot
              </label>
            </li>
            <li className="modal__radio-item">
              <label className="modal__radio-label">
                <input type="radio" name="weather" id="warm" value="warm" />
                Warm
              </label>
            </li>
            <li className="modal__radio-item">
              <label className="modal__radio-label">
                <input type="radio" name="weather" id="cold" value="cold" />
                Cold
              </label>
            </li>
          </ul>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
