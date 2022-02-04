import React from "react";

import "./country.css";

export const Country = ({ darkMode, country }) => {
  const togglin = darkMode ? "" : "lightMode";

  return (
    <div className={`cardCountry ${togglin}`}>
      <div className="imgCountry">
        <img src={country.flag} alt="" />
      </div>
      <div className="infosCountry">
        <h3 className={`nameCountry ${togglin}`}>{country.name}</h3>
        <h4 className={`textInfo ${togglin}`}>
          Population: <span>{country.population.toLocaleString()}</span>
        </h4>
        <h4 className={`textInfo ${togglin}`}>
          Region: <span>{country.region}</span>
        </h4>
        <h4 className={`textInfo ${togglin}`}>
          Capital: <span>{country.capital}</span>
        </h4>
      </div>
    </div>
  );
};
