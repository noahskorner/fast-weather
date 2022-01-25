import React from "react";
import "./App.css";
import useWindowSize from "./hooks/useWindowSize";
import Header from "./components/layout/Header";
import Forecast from "./components/layout/Forecast";
import { ForecastProvider } from "./contexts/forecast";

function App() {
  const { width, height } = useWindowSize();

  return (
    <div
      className="App bg-gray-900 text-white font-primary overflow-hidden"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <ForecastProvider>
        <div>
          <Header />
          <Forecast />
        </div>
      </ForecastProvider>
    </div>
  );
}

export default App;
