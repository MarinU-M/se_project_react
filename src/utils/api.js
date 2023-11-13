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

// const getClothingItems = async () => {
//   const res = await fetch(`${baseUrl}/items`, {
//     method: "GET",
//     headers: headers,
//   });
//   return checkServerResponse(res);
// };

//   getAPIInfo() {
//     return Promise.all([this.getUsersInfo(), this.getCardList()]);
//   }

const addNewClothes = async (item) => {
  const token = localStorage.getItem("jwt");
  const res = await fetch(`${baseUrl}/items`, {
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
  });
  return checkServerResponse(res);
};

const deleteClothingItem = async (itemId) => {
  const token = localStorage.getItem("jwt");
  const res = await fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return checkServerResponse(res);
};

const changeUserProfile = async ({ name, avatar }) => {
  const token = localStorage.getItem("jwt");
  const res = await fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  });
  return checkServerResponse(res);
};

export {
  checkServerResponse,
  getClothingItems,
  addNewClothes,
  deleteClothingItem,
  changeUserProfile,
};
