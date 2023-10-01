import React from "react";

const currentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "",
  changeCurrentTemperatureUnit: () => {
    console.log("createContext fired");
  },
});

export default currentTemperatureUnitContext;
