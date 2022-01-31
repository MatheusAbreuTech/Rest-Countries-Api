import React from "react";

import "./country.css";

export const Country = ({ darkMode }) => {
  return (
    <div className={`cardCountry ${darkMode ? "" : "lightMode"}`}>
      <div className="imgCountry">
        <img src="http://via.placeholder.com/640x360" alt="" />
      </div>
      <div className="infosCountry">
        <h3 className={`nameCountry ${darkMode ? "" : "lightMode"}`}>Brazil</h3>
        <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
          Population: <span>81.707.709</span>
        </h4>
        <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
          Region: <span>Americas</span>
        </h4>
        <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
          Capital: <span>Brasilia</span>
        </h4>
      </div>
    </div>
  );
};
