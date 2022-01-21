import React from "react";
import "./App.css";
import useWindowSize from "./hooks/useWindowSize";
import Header from "./components/layout/Header";
import Forecast from "./components/layout/Forecast";

function App() {
  const { width, height } = useWindowSize();
  return (
    <div
      className="App bg-gray-900 text-white font-primary"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Header />
      <Forecast />
    </div>
  );
}

export default App;
