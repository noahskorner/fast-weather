import axios from "axios";
import { DailyForecastType, HeadlineType } from "../interfaces/global";

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

const get5DayForecast = (
  locationKey: string
): Promise<{
  data: { Headline: HeadlineType; DailyForecasts: DailyForecastType[] };
}> => {
  return apiClient.get(`weather/5day?locationKey=${locationKey}`);
};

const textSearch = (q: string) => {
  return apiClient.get(`weather/search?q=${q}`);
};

const geoPositionSearch = (lat: number, lng: number) => {
  return apiClient.get(`weather/geoposition?lat=${lat}&lng=${lng}`);
};

export { autoComplete, get5DayForecast, textSearch, geoPositionSearch };
