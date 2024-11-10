export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};
export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.freegames.qualitypoolsboulder.com/"
    : "http://localhost:3002/";

export const getGames = () => {
  const gameApi = fetch(`${baseUrl}api/games?sort-by=alphabetical`)
    .then(processServerResponse)
    .then((data) => {
      return data;
    });
  return gameApi;
};

export const detailsOfGame = (id) => {
  return fetch(`${baseUrl}api/game?id=${id}`)
    .then(processServerResponse)
    .then((data) => {
      return data;
    });
};

export const genreOfGame = (genre) => {
  return fetch(`${baseUrl}api/games?category=${genre}`)
    .then(processServerResponse)
    .then((data) => {
      return data;
    });
};
