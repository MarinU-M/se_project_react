import "./App.css";
import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Main />
        <Footer />
        <ModalWithForm title="New garment" />
      </div>
    </>
  );
}

export default App;
