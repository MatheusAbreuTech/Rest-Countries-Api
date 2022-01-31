import { Countries } from "./components/Countries";
import { Header } from "./components/Header";

import "./App.css";
import { Filters } from "./components/Filters";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`body ${darkMode ? "" : "lightMode"}`}>
      <Header handleDarkMode={handleDarkMode} darkMode={darkMode} />
      <Filters darkMode={darkMode} />
      <div className="countries-container Container">
        <Countries darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
