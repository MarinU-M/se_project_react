import "./WeatherCard.css";
import { useContext, React } from "react";
import { weatherImgs } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ day, type, weatherTemp = "" }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const imgSrc = weatherImgs.filter((i) => {
    return i.day === day && i.type === type;
  });
  // console.log(imgSrc);

  const imgSrcUrl = imgSrc[0]?.url || "";
  return (
    <section className="weather">
      <h1 className="weather__temperature">
        {weatherTemp}° {currentTemperatureUnit}
      </h1>
      <img className="weather__image" src={imgSrcUrl} alt={type} />
    </section>
  );
}

export default WeatherCard;
