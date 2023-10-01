import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({ address, onClickModal }) {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logo} alt="logo" className="header__logoImg" />
        </div>
        <div>
          {currentDate}, {address}
        </div>
      </div>
      <div className="header__profile">
        <ToggleSwitch />
        <button className="header__addBtn" onClick={onClickModal}>
          + Add clothes
        </button>
        <div>name</div>
        <img src={avatar} alt="avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;

// A logo

// The current location (see Section 4 for details)
// An “Add Clothes” button that opens ModalWithForm
// The user’s name and avatar (both are hardcoded at this point)
