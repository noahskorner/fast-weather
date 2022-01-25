import Searchbar from "../ui/Searchbar";
import { Cloud } from "akar-icons";

const Header = () => {
  return (
    <header className="w-full h-16 border-b border-gray-700 shadow bg-gray-800 flex justify-center items-center px-2">
      <div className="w-full max-w-7xl flex items-center justify-between space-x-2">
        <div>
          <div className="w-12 h-12 bg-blue-600 rounded-full flex justify-center items-center">
            <Cloud strokeWidth={2} size={32} />
          </div>
        </div>
        <div className="w-full max-w-md flex items-center justify-center space-x-2">
          <Searchbar />
        </div>
        <div className="space-x-2 flex-shrink-0">
          <button className="text-sm px-4 py-2 border border-blue-600 rounded hover:bg-blue-600 hover:text-white">Login</button>
          <button className="text-sm px-4 py-2 border border-blue-600 rounded bg-blue-600 hover:bg-blue-700 hover:border-blue-700">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
