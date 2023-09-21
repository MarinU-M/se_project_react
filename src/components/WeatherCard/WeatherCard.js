// The WeatherCard receives data from its parent (props chain example: App → Main → WeatherCard).
// The weather data itself can be a big object, but we only need the temperature to render in the card.
// The measurement units aren’t important at this stage. We’ll only use Fahrenheit for now.
import "./WeatherCard.css";
import daySunny from "../../images/daySunny.svg";
import dayCloudy from "../../images/dayCloudy.svg";
import dayRainy from "../../images/dayRainy.svg";

const weatherImgs = [
  { url: daySunny, day: true, type: "sunny" },
  { url: dayCloudy, day: true, type: "cloudy" },
  { url: dayRainy, day: true, type: "rainy" },
];

function WeatherCard({ day, type, weatherTemp = "" }) {
  console.log(day);
  const imgSrc = weatherImgs.filter((i) => {
    // console.log(i);
    return i.day === day && i.type === type;
  });
  const imgSrcUrl = imgSrc[0].url || "";
  console.log(imgSrcUrl);
  return (
    <section className="weather">
      <h1 className="weather__temperature">{weatherTemp}° F</h1>
      <img className="weather__image" src={imgSrcUrl} alt={type} />
    </section>
  );
}

export default WeatherCard;
