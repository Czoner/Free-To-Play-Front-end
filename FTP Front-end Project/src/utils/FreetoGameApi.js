const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};
export const baseUrl = "https://www.freetogame.com/api";

export const getGames = () => {
  const gameApi = fetch(`${baseUrl}`).then(processServerResponse);
  return gameApi;
};
