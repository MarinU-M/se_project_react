import React, { useContext } from "react";
import "./ToggleSwitch.css";
import currentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  //   const [currentTemperatureUnit, changeCurrentTemperatureUnit] = useState("C");
  //   const handleChange = () => {
  //     if (currentTemperatureUnit === "C") changeCurrentTemperatureUnit("F");
  //     if (currentTemperatureUnit === "F") changeCurrentTemperatureUnit("C");
  //   };
  const { currentTemperatureUnit, handleToggleSwitch } = useContext(
    currentTemperatureUnitContext
  );

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        onChange={handleToggleSwitch}
      />
      <span
        className={
          currentTemperatureUnit === "C"
            ? "switch__toggle switch__toggle_C"
            : "switch__toggle switch__toggle_F"
        }
      />
      <p
        className={`switch__text-F ${
          currentTemperatureUnit === "F" && "switch__active"
        }`}
      >
        F
      </p>
      <p
        className={`switch__text-C ${
          currentTemperatureUnit === "C" && "switch__active"
        }`}
      >
        C
      </p>
    </label>
  );
}

export default ToggleSwitch;
