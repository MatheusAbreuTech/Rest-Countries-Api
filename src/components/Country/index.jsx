import React from "react";

import "./country.css";

export const Country = () => {
  return (
    <div className="cardCountry">
      <div className="imgCountry">
        <img src="http://via.placeholder.com/640x360" alt="" />
      </div>
      <div className="infosCountry">
        <h3 className="nameCountry">Brazil</h3>
        <h4 className="population">
          Population: <span>81.707.709</span>
        </h4>
        <h4 className="region">
          Region: <span>Americas</span>
        </h4>
        <h4 className="capital">
          Capital: <span>Brasilia</span>
        </h4>
      </div>
    </div>
  );
};
