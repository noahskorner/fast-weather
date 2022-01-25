import { useContext } from "react";
import { ForecastContext } from "../../contexts/forecast";

const Forecast = () => {
  const forecastContext = useContext(ForecastContext);

  return (
    <div className="w-full flex justify-center items-center p-2">
      {forecastContext?.location && (
        <div className="w-full max-w-5xl p-4 text-left">
          <h1 className="font-medium text-xl sm:text-2xl">
            {forecastContext.location.LocalizedName},&nbsp;
            {forecastContext.location.AdministrativeArea.ID} Forecast
          </h1>
          <p>{JSON.stringify(forecastContext.headline)}</p>
          <p>{JSON.stringify(forecastContext.forecasts)}</p>
        </div>
      )}
    </div>
  );
};

export default Forecast;
