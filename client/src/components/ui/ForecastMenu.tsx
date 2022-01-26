const ForecastMenu = () => (
  <div className="border-b border-gray-800 text-sm">
    <button className="hover:border-b-2 p-2 border-blue-600">Hourly</button>
    <button className="border-b-2 p-2 border-blue-600">5 Day Forecast</button>
    <button className="hover:border-b-2 p-2 border-blue-600">
      10 Day Forecast
    </button>
    <button className="hover:border-b-2 p-2 border-blue-600">
      15 Day Forecast
    </button>
  </div>
);

export default ForecastMenu;
