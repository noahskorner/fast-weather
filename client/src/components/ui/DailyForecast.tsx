import { DailyForecastType } from "../../interfaces/global";

interface DailyForecastProps extends DailyForecastType {
  index: number;
}

const DailyForecast = (forecast: DailyForecastProps) => {
  return (
    <div
      className={`${
        forecast.index === 0 ? "border-t" : ""
      } border-b py-2 border-gray-800 flex space-y-4 items-center justify-between space-x-2 hover:bg-gradient-to-r from-gray-800 to-transparent px-2`}
    >
      <div className="w-1/4">
        <div>
          <h6>
            {new Date(forecast.Date).toLocaleDateString("en-US", {
              weekday: "long",
            })}
          </h6>
          <p className="text-sm italic">
            {new Date(forecast.Date).toLocaleDateString("en-US", {
              month: "numeric",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
      <div className="w-1/4 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <img
            src={
              process.env.PUBLIC_URL +
              `/images/weather-icons/${forecast.Day.Icon}.png`
            }
            alt=""
          />
          <span className="text-sm">{forecast.Day.IconPhrase}</span>
        </div>
      </div>
      <div className="w-1/4 flex justify-center items-center">
        <p>
          {forecast.Temperature.Maximum.Value}
          {forecast.Temperature.Maximum.Unit}&#176;/
          {forecast.Temperature.Minimum.Value}
          {forecast.Temperature.Minimum.Unit}&#176;
        </p>
      </div>
      <div className="w-1/4 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <img
            src={
              process.env.PUBLIC_URL +
              `/images/weather-icons/${forecast.Night.Icon}.png`
            }
            alt=""
          />
          <span className="text-sm">{forecast.Night.IconPhrase}</span>
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
