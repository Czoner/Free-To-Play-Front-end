import { processServerResponse } from "./FreetoGameApi";
import { baseUrl } from "./FreetoGameApi";

export function request(url, options) {
  return fetch(url, options).then(processServerResponse);
}

export const signUp = ({ username, email, password }) => {
  return request(`${baseUrl}signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
};

export const signIn = ({ username, password }) => {
  return request(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
};

export const getUser = (token) =>
  request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
