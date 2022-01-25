import { Search, Location } from "akar-icons";
import { useState, useEffect, useContext } from "react";
import { ForecastContext } from "../../contexts/forecast";
import { CityType } from "../../interfaces/global";
import { textSearch } from "../../services/fastWeatherApi";
import Spinner from "./Spinner";

const Searchbar = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [cities, setCities] = useState<CityType[]>([]);

  const forecastContext = useContext(ForecastContext);

  const search = async () => {
    if (!query.length) {
      setLoading(false);
      setCities([]);
      return;
    }

    try {
      const response = await textSearch(query);
      setCities(response.data);
    } catch (error) {
      console.log(error);
      setCities([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!query.length) return;
    setLoading(true);
    const delayDebounceFn = setTimeout(() => {
      search();
    }, 700);

    return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line
  }, [query]);

  return (
    <div
      className={` ${
        isSearching
          ? "fixed sm:relative top-0 left-0 right-0 p-2 md:p-0"
          : "max-w-lg"
      } w-full`}
    >
      <div className="relative w-full z-10">
        <div
          className={`${
            isSearching
              ? "shadow-3xl border-blue-600 rounded-t border-t border-l border-r border-b border-b-gray-600"
              : "rounded"
          } w-full bg-gray-700 h-10 border-gray-700 px-2 py-1`}
        >
          {forecastContext?.location !== null ? (
            <div
              onClick={() => {
                forecastContext?.setLocation(null);
                setIsSearching(true);
                setQuery("");
              }}
              className="w-full h-full flex justify-start items-center p-3 rounded flex justify-between items-center"
            >
              {forecastContext?.location.LocalizedName},&nbsp;
              {forecastContext?.location.AdministrativeArea.LocalizedName}
              <button className="hover:underline text-sm text-red-500">
                Clear
              </button>
            </div>
          ) : (
            <div className="w-full h-full flex justify-between items-center space-x-2">
              <input
                onFocus={() => setIsSearching(true)}
                onChange={(event) => setQuery(event.target.value)}
                value={query}
                type="text"
                name=""
                className="bg-gray-700 w-full"
                placeholder="Search For Cities"
                id=""
              />
              <Search strokeWidth={2} size={20} />
            </div>
          )}
        </div>
        {isSearching && (
          <div className="absolute top-100 left-0 right-0 min-h-10 bg-gray-700 border-b border-l border-r border-blue-600 shadow-3xl rounded-b p-2 flex flex-col items-center overflow-y-auto max-h-64">
            <button className="font-light text-left hover:underline rounded p-2 text-blue-300 text-sm text-center flex items-center justify-center">
              <Location strokeWidth={2} size={16} className="mr-2" />
              Use My Current Location
            </button>
            {cities.length
              ? cities.map((city) => {
                  return (
                    <button
                      onClick={() => {
                        forecastContext?.setLocation(city);
                        setIsSearching(false);
                      }}
                      className="w-full font-light text-left hover:bg-gray-800 rounded p-2"
                      key={city.Key}
                    >
                      {city.LocalizedName},&nbsp;{city.AdministrativeArea.ID}
                    </button>
                  );
                })
              : null}
            {loading && <Spinner />}
          </div>
        )}
      </div>
      {isSearching && (
        <div
          onClick={() => setIsSearching(false)}
          className="fixed top-0 left-0 right-0 bottom-0 z-0"
        ></div>
      )}
    </div>
  );
};

export default Searchbar;
