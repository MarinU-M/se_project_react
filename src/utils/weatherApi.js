const latitude = "44.34";
const longitude = "10.99";
const APIkey = "1f8db2b6a0ee3ef2eda139a741eb2b05";

const getWeatherForecast = () => {
  const weatherAPI = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherAPI;
};

const roundTemperature = (data) => {
  const main = data.main;
  const temperature = main.temp;
  return Math.round(temperature);
};

const currentWeather = (data) => {
  const weather = data.weather;
  const main = weather[0].main;
  return main;
};

export { getWeatherForecast, roundTemperature, currentWeather };

// const weatherData = {
//   coord: { lon: 10.99, lat: 44.34 },
//   weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10n" }],
//   base: "stations",
//   main: {
//     temp: 57.61,
//     feels_like: 57.25,
//     temp_min: 54.68,
//     temp_max: 60.31,
//     pressure: 1013,
//     humidity: 89,
//     sea_level: 1013,
//     grnd_level: 928,
//   },
//   visibility: 10000,
//   wind: { speed: 7.07, deg: 190, gust: 11.41 },
//   rain: { "1h": 0.71 },
//   clouds: { all: 15 },
//   dt: 1695259593,
//   sys: {
//     type: 2,
//     id: 2044440,
//     country: "IT",
//     sunrise: 1695272485,
//     sunset: 1695316636,
//   },
//   timezone: 7200,
//   id: 3163858,
//   name: "Zocca",
//   cod: 200,
// };

// console.log(currentWeather(weatherData));
