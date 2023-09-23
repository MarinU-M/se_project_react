// The WeatherCard receives data from its parent (props chain example: App → Main → WeatherCard).
// The weather data itself can be a big object, but we only need the temperature to render in the card.
// The measurement units aren’t important at this stage. We’ll only use Fahrenheit for now.
import "./WeatherCard.css";
import { weatherImgs } from "../../utils/constants";

function WeatherCard({ day, type, weatherTemp = "" }) {
  const imgSrc = weatherImgs.filter((i) => {
    return i.day === day && i.type === type;
  });
  // console.log(imgSrc);

  const imgSrcUrl = imgSrc[0]?.url || "";
  return (
    <section className="weather">
      <h1 className="weather__temperature">{weatherTemp}° F</h1>
      <img className="weather__image" src={imgSrcUrl} alt={type} />
    </section>
  );
}

export default WeatherCard;
