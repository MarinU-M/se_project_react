import "./App.css";
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import {
  getWeatherForecast,
  roundTemperature,
  getWeather,
  getTime,
  getPlace,
} from "../../utils/weatherApi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [temp, setTemp] = useState(0);
  const [weatherType, setWeatherType] = useState("");
  const [time, setTime] = useState(null);
  const [address, setAddress] = useState("");

  // open and close modal
  const handleOpenModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  // close modal by pressing esc
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

  // handle modal of selected card
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  // set weather
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

  // switch fahrenheit or celcius
  const handleToggleSwitch = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  // add item
  const addItem = (evt) => {
    console.log(evt);
  };

  return (
    <div className="app">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitch }}
      >
        <Header address={address} onClickModal={handleOpenModal} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              type={weatherType}
              day={time}
              onSelectedCard={handleSelectedCard}
            />
          </Route>
          <Route path="/profile">
            <Profile onSelectedCard={handleSelectedCard} />
          </Route>
        </Switch>

        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            isOpen={activeModal === "create"}
            onAddItem={addItem}
            onCloseModal={handleCloseModal}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
