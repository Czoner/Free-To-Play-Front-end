const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};
export const baseUrl = "http://localhost:3002/api";

export const getGames = () => {
  const gameApi = fetch(`${baseUrl}/games?sort-by=alphabetical`)
    .then(processServerResponse)
    .then((data) => {
      return data;
    });
  return gameApi;
};

export const detailsOfGame = (id) => {
  return fetch(`${baseUrl}/game?id=${id}`)
    .then(processServerResponse)
    .then((data) => {
      return data;
    });
};

export const genreOfGame = (genre) => {
  return fetch(`${baseUrl}/games?category=${genre}`)
    .then(processServerResponse)
    .then((data) => {
      return data;
    });
};
