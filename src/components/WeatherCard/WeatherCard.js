// The WeatherCard receives data from its parent (props chain example: App → Main → WeatherCard).
// The weather data itself can be a big object, but we only need the temperature to render in the card.
// The measurement units aren’t important at this stage. We’ll only use Fahrenheit for now.
import "./WeatherCard.css";
import daySunny from "../../images/day/daySunny.svg";
import dayCloudy from "../../images/day/dayCloudy.svg";
import dayRainy from "../../images/day/dayCloudy.svg";
import dayStorm from "../../images/day/dayStorm.svg";
import daySnow from "../../images/day/daySnow.svg";
import dayFog from "../../images/day/dayFog.svg";
import nightSunny from "../../images/night/nightSunny.svg";
import nightCloudy from "../../images/night/nightCloudy.svg";
import nightRainy from "../../images/night/nightCloudy.svg";
import nightStorm from "../../images/night/nightStorm.svg";
import nightSnow from "../../images/night/nightSnow.svg";
import nightFog from "../../images/night/nightFog.svg";

const weatherImgs = [
  { url: daySunny, day: true, type: "sunny" },
  { url: dayCloudy, day: true, type: "cloudy" },
  { url: dayRainy, day: true, type: "rainy" },
  { url: dayStorm, day: true, type: "storm" },
  { url: daySnow, day: true, type: "snow" },
  { url: dayFog, day: true, type: "fog" },
  { url: nightSunny, day: false, type: "sunny" },
  { url: nightCloudy, day: false, type: "cloudy" },
  { url: nightRainy, day: false, type: "rainy" },
  { url: nightStorm, day: false, type: "storm" },
  { url: nightSnow, day: false, type: "snow" },
  { url: nightFog, day: false, type: "fog" },
];

function WeatherCard({ day, type, weatherTemp = "" }) {
  const imgSrc = weatherImgs.filter((i) => {
    // console.log(i);
    return i.day === day && i.type === type;
  });
  console.log(imgSrc);
  const imgSrcUrl = imgSrc[0].url || "";
  return (
    <section className="weather">
      <h1 className="weather__temperature">{weatherTemp}° F</h1>
      <img className="weather__image" src={imgSrcUrl} alt={type} />
    </section>
  );
}

export default WeatherCard;
