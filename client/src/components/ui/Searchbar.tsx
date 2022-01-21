import { Search } from "akar-icons";
import { useState } from "react";

const Searchbar = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);

  return (
    <div
      className={`${
        isSearching && "shadow-sm border-blue-600 shadow-blue-900"
      } px-2 w-full max-w-lg bg-gray-700 h-10 px-4 rounded flex justify-between items-center border border-gray-700 text-sm space-x-2`}
    >
      <input
        onFocus={() => setIsSearching(true)}
        onBlur={() => setIsSearching(false)}
        type="text"
        name=""
        className="bg-gray-700 w-full"
        placeholder="Search City or Zipcode"
        id=""
      />
      <Search strokeWidth={2} size={20}/>
    </div>
  );
};

export default Searchbar;
