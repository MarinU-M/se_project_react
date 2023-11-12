import "./App.css";
import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { signIn, signUp, checkToken } from "../../utils/auth";
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
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();

  // open register modal
  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  // open login modal
  const handleLogInModal = () => {
    setActiveModal("login");
  };

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

  // submit user info
  const handleSubmit = (req) => {
    setIsLoading(true);
    req()
      .then(handleCloseModal)
      .catch((err) => {
        console.error(err);
      })
      .finally(setIsLoading(false));
  };

  // signup user
  const handleSignUp = ({ name, avatar, email, password }) => {
    const newUser = () => {
      return signUp({ name, avatar, email, password }).then((user) => {
        const { email, password } = user;
        console.log(email, password);
        handleLogin({ email, password });
        setLoggedIn(true);
        setCurrentUser(user);
        localStorage.setItem("jwt", user.token);
      });
    };
    handleSubmit(newUser);
  };

  // login user
  const handleLogin = ({ email, password }) => {
    const loginUser = () => {
      return signIn({ email, password }).then((res) => {
        const token = res.token;
        localStorage.setItem("jwt", token);
        checkToken(token).then((user) => {
          setCurrentUser(user);
          setLoggedIn(true);
          history.push("/profile");
        });
      });
    };
    handleSubmit(loginUser);
  };

  // switch fahrenheit or celcius
  const handleToggleSwitchChange = () => {
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
      .catch((err) => console.error(`addItem: ${err}`));
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
      .catch((err) => console.error(`deleteItem: ${err}`));
  };

  // check if there is token on user client
  // useEffect(() => {
  //   const jwt = localStorage.getItem("jwt");
  //   if (jwt) {
  //     return checkToken(jwt).then((user) => {
  //       console.log(user);
  //       setLoggedIn(true);
  //       setCurrentUser(user);
  //     });
  //   }
  // });

  // close modal by pressing esc
  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

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
        console.error(`weatherData: ${err}`);
      });
  }, []);

  // load clothing items
  useEffect(() => {
    getClothingItems()
      .then((items) => setClothingItems(items))
      .catch((err) => console.error(`setClothingItems: ${err}`));
  }, []);

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            address={address}
            onClickModal={handleOpenModal}
            onSignUp={handleRegisterModal}
            onLogIn={handleLogInModal}
            loggedIn={loggedIn}
          />
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
            <ProtectedRoute path="/profile" loggedIn={loggedIn}>
              <Profile
                onSelectedCard={handleSelectedCard}
                clothingItems={clothingItems}
                onClickModal={handleOpenModal}
              />
            </ProtectedRoute>
          </Switch>

          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              isOpen={activeModal === "create"}
              onAddItem={handleAddItem}
              onClose={handleCloseModal}
              isLoading={isLoading}
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
          {activeModal === "register" && (
            <RegisterModal
              isOpen={activeModal === "register"}
              onClose={handleCloseModal}
              onSubmit={handleSignUp}
              isLoading={isLoading}
              onAltOptionBtn={handleLogInModal}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              isOpen={activeModal === "login"}
              onClose={handleCloseModal}
              onSubmit={handleLogin}
              onAltOptionBtn={handleRegisterModal}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
