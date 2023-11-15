import { baseUrl } from "./constants";

const checkServerResponse = (res) => {
  if (res.ok) {
    Promise.resolve("Promise Resolved");
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

const getClothingItems = () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkServerResponse);
};

const addNewClothes = (item) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: item.name,
      link: item.link,
      weather: item.weather,
    }),
  }).then(checkServerResponse);
};

const deleteClothingItem = (itemId) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkServerResponse);
};

const changeUserProfile = ({ name, avatar }) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then(checkServerResponse);
};

const addCardLike = (itemId, user) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ user }),
  }).then(checkServerResponse);
};

const removeCardLike = (itemId, user) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ user }),
  }).then(checkServerResponse);
};

export {
  checkServerResponse,
  getClothingItems,
  addNewClothes,
  deleteClothingItem,
  changeUserProfile,
  addCardLike,
  removeCardLike,
};
