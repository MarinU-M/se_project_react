import "./Header.css";
import logo from "../../images/logo.svg";
// import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({ address, onClickModal, onSignUp, onLogIn, loggedIn }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const currentUser = useContext(CurrentUserContext);
  // const currentcontext = useContext(CurrentUserContext);
  // const currentUser = currentcontext.user;
  const currentAvatar = currentUser.avatar;
  const userName = currentUser.name;

  console.log(currentUser);
  console.log(currentAvatar);

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logoImg" />
        </Link>
        <div>
          {currentDate}, {address}
        </div>
      </div>
      <div className="header__profile">
        <ToggleSwitch />
        {loggedIn ? (
          <>
            <button className="header__addBtn" onClick={onClickModal}>
              + Add clothes
            </button>
            <Link to="/profile" className="header__name">
              {currentUser.name}
            </Link>
            {currentAvatar ? (
              <img
                src={currentAvatar}
                alt="user avatar icon"
                className="header__avatar"
              />
            ) : (
              <p>{currentUser.name[0].toUpperCase()}</p>
            )}
          </>
        ) : (
          <>
            <button className="header__addBtn" onClick={onSignUp}>
              Sign Up
            </button>
            <button className="header__addBtn" onClick={onLogIn}>
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;

// A logo

// The current location (see Section 4 for details)
// An “Add Clothes” button that opens ModalWithForm
// The user’s name and avatar (both are hardcoded at this point)
