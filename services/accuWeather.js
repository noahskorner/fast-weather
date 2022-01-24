const axios = require("axios");

const baseURL = "http://dataservice.accuweather.com/";

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  params: {
    apikey: process.env.ACCUWEATHER_API_KEY,
  },
});

module.exports = {
  get5DayForecast(locationKey) {
    return apiClient.get(`forecasts/v1/daily/5day/${locationKey}`);
  },
  autoComplete(q) {
    return apiClient.get(`locations/v1/cities/autocomplete?q=${q}`);
  },
  textSearch(q) {
    return apiClient.get(`locations/v1/search?q=${q}`);
  },
  geoPositionSearch(lat, lng) {
    return apiClient.get(
      `locations/v1/cities/geoposition/search?q=${lat},${lng}`
    );
  },
};
