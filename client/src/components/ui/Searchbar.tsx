import { Search } from "akar-icons";
import { useState } from "react";
import { City } from "../../interfaces/global";
import { autoComplete } from "../../services/fastWeatherApi";

const Searchbar = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [cities, setCities] = useState<City[]>([]);
  let searchInterval: NodeJS.Timer | null = null;

  const search = async () => {
    try {
      const response = await autoComplete(query);
      setCities(response.data);
    } catch (error) {
      console.log(error);
      setCities([]);
    }
  };

  const handleSearchChange = (value: string) => {
    setQuery(value);
    let searchDelay = 700;
    if (searchInterval) clearInterval(searchInterval);
    searchInterval = setInterval(() => {
      searchDelay -= 100;
      if (searchDelay === 0) {
        //search();
      }
    }, 100);
  };

  return (
    <div className="relative w-full max-w-lg">
      <div
        className={`${
          isSearching
            ? "shadow-3xl border-blue-600 rounded-t border-t border-l border-r border-b border-b-gray-600"
            : "rounded"
        } px-2 w-full bg-gray-700 h-10 px-4 flex justify-between items-center border-gray-700 text-sm space-x-2`}
      >
        <input
          onFocus={() => setIsSearching(true)}
          onBlur={() => setIsSearching(false)}
          onChange={(event) => handleSearchChange(event.target.value)}
          value={query}
          type="text"
          name=""
          className="bg-gray-700 w-full"
          placeholder="Search City or Zipcode"
          id=""
        />
        <Search strokeWidth={2} size={20} />
      </div>
      {isSearching && (
        <div className="absolute top-100 left-0 right-0 min-h-10 bg-gray-700 border-b border-l border-r border-blue-600 shadow-3xl rounded-b p-2">
          {cities.length
            ? cities.map((city) => {
                return (
                  <button
                    className="w-full font-light text-left hover:bg-gray-900 rounded py-1 px-2"
                    key={city.Key}
                  >
                    {city.LocalizedName},&nbsp;{city.AdministrativeArea.ID}
                  </button>
                );
              })
            : null}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
