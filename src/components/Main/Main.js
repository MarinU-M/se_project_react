//     The WeatherCard component, which shows the current temperature. Weather data is sent here, in addition to the Header, as props.
// Note that the weather data is not stored in Main.js, so you need to pass it down from the App component.
// Clothing item cards, which are filtered based on the current weather.
// Wrap the ItemCard component into the unordered list and use the filter() and map() methods.
import defaultClothingItems from "../../utils/constants";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main() {
  const temp = "100° F";
  return (
    <main>
      <WeatherCard day={true} type="rainy" temp={temp} />
      <section className="item">
        <p className="item__heading">Today is {temp} / You may want to wear:</p>
        <ul className="item__card-list">
          {defaultClothingItems.map((item) => (
            <ItemCard item={item} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
