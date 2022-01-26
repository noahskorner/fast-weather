import { useContext } from "react";
import { ForecastContext } from "../../contexts/forecast";
import DailyForecast from "../ui/DailyForecast";
import ForecastMenu from "../ui/ForecastMenu";
import Headline from "../ui/Headline";

const Forecast = () => {
  const forecastContext = useContext(ForecastContext);

  return (
    <div className="w-full h-full overflow-y-auto flex justify-center p-2">
      {forecastContext?.location && forecastContext?.headline ? (
        <div className="w-full max-w-5xl p-4 text-left">
          <Headline
            location={forecastContext.location}
            headline={forecastContext.headline}
          />
          <div>
            <ForecastMenu />
            <div className="bg-gray-800 h-24 p-2 flex justify-between items-center uppercase font-medium">
              <p className="w-full">Date</p>
              <p className="w-full flex justify-center">Day</p>
              <p className="w-full flex justify-center">HI/LO</p>
              <p className="w-full flex justify-center">Night</p>
            </div>
            {forecastContext.forecasts?.map((forecast, index) => {
              return (
                <DailyForecast
                  key={forecast.Date}
                  {...forecast}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <h2 className="text-3xl h-64 w-full">
          Enter a city to see it's forecast!
        </h2>
      )}
    </div>
  );
};

export default Forecast;
