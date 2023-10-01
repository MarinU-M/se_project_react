import React, { useState } from "react";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  const [currentTempUnit, changeCurrentTempUnit] = useState("C");
  const handleChange = (evt) => {
    if (currentTempUnit === "C") changeCurrentTempUnit("F");
    if (currentTempUnit === "F") changeCurrentTempUnit("C");
  };

  return (
    <label className="switch">
      <input type="checkbox" className="switch__box" onChange={handleChange} />
      <span
        className={
          currentTempUnit === "C"
            ? "switch__toggle switch__toggle_C"
            : "switch__toggle switch__toggle_F"
        }
      />
      <p
        className={`switch__text-F ${
          currentTempUnit === "F" && "switch__active"
        }`}
      >
        F
      </p>
      <p
        className={`switch__text-C ${
          currentTempUnit === "C" && "switch__active"
        }`}
      >
        C
      </p>
    </label>
  );
}

export default ToggleSwitch;
