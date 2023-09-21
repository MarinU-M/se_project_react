//     The WeatherCard component, which shows the current temperature. Weather data is sent here, in addition to the Header, as props.
// Note that the weather data is not stored in Main.js, so you need to pass it down from the App component.

// Wrap the ItemCard component into the unordered list and use the filter() and map() methods.
import { useMemo } from "react";
import defaultClothingItems from "../../utils/constants";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherTemp, onSelectedCard }) {
  // Clothing item cards, which are filtered based on the current weather.
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);
  const filteredItems = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main>
      <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
      <section className="item">
        <h2 className="item__heading">
          Today is {weatherTemp}° F/ You may want to wear:
        </h2>
        <ul className="item__card-list">
          {filteredItems.map((item) => (
            <ItemCard item={item} onSelectedCard={onSelectedCard} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
