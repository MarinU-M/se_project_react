import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header() {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <div>
            <img src={logo} alt="logo" className="header__logoImg" />
          </div>
          <div>{currentDate}</div>
        </div>
        <div className="header__profile">
          <div>
            <button className="header__addBtn">+ Add clothes</button>
          </div>
          <div>name</div>
          <div>
            <img src={avatar} alt="avatar" className="header__avatar" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

// A logo

// The current location (see Section 4 for details)
// An “Add Clothes” button that opens ModalWithForm
// The user’s name and avatar (both are hardcoded at this point)
