import { CityType, HeadlineType } from "../../interfaces/global";

interface HeadlineProps {
  location: CityType;
  headline: HeadlineType;
}

const Headline = ({ location, headline }: HeadlineProps) => {
  return (
    <div>
      <h1 className="font-medium text-2xl sm:text-3xl mb-4">
        {location.LocalizedName},&nbsp;
        {location.AdministrativeArea.ID} Forecast
      </h1>
      <div className="border-t border-b flex flex-col md:flex-row items-center space-x-4 space-y-2 md:space-y-0 p-4 border-gray-800 font-light bg-gradient-to-r from-gray-800 to-transparent mb-4">
        <p className="capitalize px-4 py-1 bg-blue-600 rounded uppercase">
          {headline?.Category}
        </p>
        <p className="uppercase">
          {headline?.EffectiveDate &&
            new Date(headline?.EffectiveDate).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
        </p>
        <p className="italic">{headline?.Text}</p>
      </div>
    </div>
  );
};

export default Headline;
