import axios from "axios";

const baseURL = "http://localhost:3001/api/";

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const autoComplete = (q: string) => {
  return apiClient.get(`weather/autocomplete?q=${q}`);
};

const get5DayForecast = (locationKey: string) => {
  return apiClient.get(`weather/5day?locationKey=${locationKey}`);
};

const geoPositionSearch = (lat: number, lng: number) => {
  return apiClient.get(`weather/geoposition?lat=${lat}&lng=${lng}`);
};

export { autoComplete, get5DayForecast, geoPositionSearch };
