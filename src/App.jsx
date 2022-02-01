import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { CountryDetail } from "./pages/Detail";
import { Header } from "./components/Header";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("lightMode");
  };

  return (
    <div className={`body ${darkMode ? "" : "lightMode"}`}>
      <BrowserRouter>
        <Header handleDarkMode={handleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route
            path="/"
            element={
              <Home handleDarkMode={handleDarkMode} darkMode={darkMode} />
            }
          />
          <Route
            path="detail"
            element={<CountryDetail darkMode={darkMode} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
