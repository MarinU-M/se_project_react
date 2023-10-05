import "./App.css";
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import Profile from "../Profile/Profile";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import {
  getClothingItems,
  addNewClothes,
  deleteClothingItem,
} from "../../utils/api";
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
  const [clothingItems, setClothingItems] = useState([]);

  // open and close modal
  const handleOpenModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  // handle modal of selected card
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  // handle modal of item delete confirmation
  const handleConfirmModal = () => {
    setActiveModal("confirm");
  };

  // switch fahrenheit or celcius
  const handleToggleSwitch = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  // add clothing item
  const handleAddItem = (item) => {
    addNewClothes(item)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => console.log(`addItem: ${err}`));
  };

  // delete clothing items
  const handleDeleteItem = (selectedItem) => {
    deleteClothingItem(selectedItem._id)
      .then(() => {
        const updatedClothingItems = clothingItems.filter((item) => {
          return item._id !== selectedItem._id;
        });
        setClothingItems(updatedClothingItems);
        handleCloseModal();
      })
      .catch((err) => console.log(`deleteItem: ${err}`));
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
        console.log(`weatherData: ${err}`);
      });
  }, []);

  // load clothing items
  useEffect(() => {
    getClothingItems()
      .then((items) => setClothingItems(items))
      .catch((err) => console.log(`setClothingItems: ${err}`));
  }, []);

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
              clothingItems={clothingItems}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onSelectedCard={handleSelectedCard}
              clothingItems={clothingItems}
              onClickModal={handleOpenModal}
            />
          </Route>
        </Switch>

        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            isOpen={activeModal === "create"}
            onAddItem={handleAddItem}
            onClose={handleCloseModal}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onDelete={handleConfirmModal}
          />
        )}
        {activeModal === "confirm" && (
          <DeleteConfirmationModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onSubmit={handleDeleteItem}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
