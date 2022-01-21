import Searchbar from "../ui/Searchbar";
import { Cloud } from "akar-icons";

const Header = () => {
  return (
    <header className="w-full h-16 border-b border-gray-700 shadow bg-gray-800 flex justify-center items-center px-2">
      <div className="w-1/6">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex justify-center items-center">
          <Cloud strokeWidth={2} size={32} />
        </div>
      </div>
      <div className="w-2/3 flex justify-center">
        <Searchbar />
      </div>
      <div className="w-1/6"></div>
    </header>
  );
};

export default Header;
