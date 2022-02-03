import React from "react";

import "./country.css";

export const Country = ({ darkMode, country }) => {
  return (
    <div className={`cardCountry ${darkMode ? "" : "lightMode"}`}>
      <div className="imgCountry">
        <img src={country.flag} alt="" />
      </div>
      <div className="infosCountry">
        <h3 className={`nameCountry ${darkMode ? "" : "lightMode"}`}>
          {country.name}
        </h3>
        <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
          Population: <span>{country.population.toLocaleString()}</span>
        </h4>
        <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
          Region: <span>{country.region}</span>
        </h4>
        <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
          Capital: <span>{country.capital}</span>
        </h4>
      </div>
    </div>
  );
};
