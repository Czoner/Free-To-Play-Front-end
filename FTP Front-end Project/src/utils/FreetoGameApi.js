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

function request(url, options) {
  return fetch(url, options)
    .then(processServerResponse)
    .then((data) => {
      return data;
    });
}

export const getGames = () => {
  return request(`${baseUrl}api/games?sort-by=alphabetical`);
};

export const detailsOfGame = (id) => {
  return request(`${baseUrl}api/game?id=${id}`);
};

export const genreOfGame = (genre) => {
  return request(`${baseUrl}api/games?category=${genre}`);
};
