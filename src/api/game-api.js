import { root } from "../config/conf";

export const createGame = async game => {
  return await fetch(`${root}/game`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "text/plan"
    },
    body: JSON.stringify(game)
  })
    .then(response => response.text())
    .then(text => JSON.parse(text))
    .catch(err => console.log(err));
};

export const getResult = async game => {
  return await fetch(`${root}/game/result`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(game)
  })
    .then(response => response.text())
    .then(text => JSON.parse(text))
    .catch(err => console.log(err));
};

export const parseData = async game => {
  return await fetch(`${root}/game/over`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(game)
  })
    .then(response => response.text())
    .then(text => JSON.parse(text))
    .catch(err => console.log(err));
};
