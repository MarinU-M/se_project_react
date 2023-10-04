// Place it in the utils folder and add it to the state of App.js. Clothing items should appear in the state upon mounting the App component as well.
import daySunny from "../images/day/daySunny.svg";
import dayCloudy from "../images/day/dayCloudy.svg";
import dayRainy from "../images/day/dayCloudy.svg";
import dayStorm from "../images/day/dayStorm.svg";
import daySnow from "../images/day/daySnow.svg";
import dayFog from "../images/day/dayFog.svg";
import nightSunny from "../images/night/nightSunny.svg";
import nightCloudy from "../images/night/nightCloudy.svg";
import nightRainy from "../images/night/nightCloudy.svg";
import nightStorm from "../images/night/nightStorm.svg";
import nightSnow from "../images/night/nightSnow.svg";
import nightFog from "../images/night/nightFog.svg";

const headers = {
  "Content-Type": "application/json",
};
const baseUrl = "http://localhost:3001";

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

export { baseUrl, headers, weatherImgs };

// const defaultClothingItems = [
//   {
//     _id: 0,
//     name: "Cap",
//     weather: "hot",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
//   },
//   {
//     _id: 1,
//     name: "Hoodie",
//     weather: "warm",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
//   },
//   {
//     _id: 2,
//     name: "Jacket",
//     weather: "cold",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
//   },
//   {
//     _id: 3,
//     name: "Sneakers",
//     weather: "cold",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
//   },
//   {
//     _id: 4,
//     name: "T-Shirt",
//     weather: "hot",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
//   },
//   {
//     _id: 5,
//     name: "Winter coat",
//     weather: "cold",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
//   }
// ]
