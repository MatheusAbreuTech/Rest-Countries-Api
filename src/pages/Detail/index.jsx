import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";

import "./styles.css";

export const CountryDetail = ({ darkMode }) => {
  return (
    <div className="Container">
      <button type="button" className="btn-back">
        <HiArrowNarrowLeft className="arrowIcon" />
        Back
      </button>
      <div className="countryDetail">
        <div className="countryImage">
          <img src="http://via.placeholder.com/640x360" alt="" />
        </div>
        <div className="infos-containeir">
          <h2>Brazil</h2>
          <div className="countryInfos">
            <div className="infos1">
              <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
                Native Name: <span>Brasil</span>
              </h4>
              <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
                Population: <span>81.707.709</span>
              </h4>
              <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
                Region: <span>Americas</span>
              </h4>
              <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
                Sub Region: <span>America do sul</span>
              </h4>
              <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
                Capital: <span>Brasilia</span>
              </h4>
            </div>
            <div className="infos2">
              <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
                Top Level Domain: <span>.br</span>
              </h4>
              <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
                Currencies: <span>Real</span>
              </h4>
              <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
                Languages: <span>Portugues</span>
              </h4>
            </div>
          </div>
          <div className="borderCountries">
            <h4>Border Countries:</h4>
            <ul>
              <li>Uruguai</li>
              <li>Uruguai</li>
              <li>Uruguai</li>
              <li>Uruguai</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
