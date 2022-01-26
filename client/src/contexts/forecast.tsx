import { createContext, useEffect, useState } from "react";
import { get5DayForecast } from "../services/fastWeatherApi";
import {
  CityType,
  DailyForecastType,
  HeadlineType,
} from "../interfaces/global";

interface ForecastContextType {
  location: CityType | null;
  setLocation: Function;
  headline: HeadlineType | null;
  setHeadline: Function;
  forecasts: DailyForecastType[] | null;
  setForecasts: Function;
  getForecast: Function;
}

export const ForecastContext = createContext<ForecastContextType | null>(null);

interface ForecastProviderType {
  children: JSX.Element;
}

export const ForecastProvider = ({ children }: ForecastProviderType) => {
  const [location, setLocation] = useState<CityType | null>(null);
  const [headline, setHeadline] = useState<HeadlineType | null>(null);
  const [forecasts, setForecasts] = useState<DailyForecastType[] | null>(null);

  const getForecast = async () => {
    if (!location) return;
    try {
      const response = await get5DayForecast(location.Key);
      const { Headline, DailyForecasts } = response.data;

      setHeadline(Headline);
      setForecasts(DailyForecasts);
    } catch (error) {
      console.log(error);
      setForecasts(null);
    }
  };

  useEffect(() => {
    if (!location) return;

    getForecast();
    // eslint-disable-next-line
  }, [location]);

  return (
    <ForecastContext.Provider
      value={{
        location,
        setLocation,
        headline,
        setHeadline,
        forecasts,
        setForecasts,
        getForecast,
      }}
    >
      {children}
    </ForecastContext.Provider>
  );
};
