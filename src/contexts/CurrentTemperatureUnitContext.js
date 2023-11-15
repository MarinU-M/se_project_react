import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "",
  changeCurrentTemperatureUnit: () => {
    console.log("createContext fired");
  },
});

export default CurrentTemperatureUnitContext;
