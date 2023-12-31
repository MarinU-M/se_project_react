import { useMemo, useContext } from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherTemp,
  type,
  day,
  onSelectedCard,
  clothingItems,
  onCardLike,
  isLoggedIn,
}) {
  // Clothing item cards, which are filtered based on the current weather.
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.[currentTemperatureUnit] || 999;
  const weatherType = useMemo(() => {
    if (weatherTemp.F >= 86) {
      return "hot";
    } else if (weatherTemp.F >= 66 && weatherTemp.F <= 85) {
      return "warm";
    } else if (weatherTemp.F <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredItems = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });
  return (
    <main>
      <WeatherCard day={day} type={type} weatherTemp={temp} />
      <section className="item">
        <h2 className="item__heading">
          Today is {temp}° {currentTemperatureUnit}/ You may want to wear:
        </h2>
        <ul className="item__card-list">
          {filteredItems.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onSelectedCard={onSelectedCard}
              onCardLike={onCardLike}
              isLoggedIn={isLoggedIn}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
