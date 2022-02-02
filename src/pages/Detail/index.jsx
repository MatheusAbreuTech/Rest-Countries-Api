import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";

import "./styles.css";

export const CountryDetail = ({ darkMode }) => {
  return (
    <div className="Container">
      <button
        type="button"
        className={`btn-back ${darkMode ? "" : "lightMode"}`}>
        <HiArrowNarrowLeft className="arrowIcon" />
        Back
      </button>
      <div className="countryDetail">
        <div className="countryImage">
          <img src="http://via.placeholder.com/640x360" alt="" />
        </div>
        <div className="infos-container">
          <h2 className={`countryName ${darkMode ? "" : "lightMode"}`}>
            Brazil
          </h2>
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
            <h4 className={`titleBorder ${darkMode ? "" : "lightMode"}`}>
              Border Countries:
            </h4>
            <div className="borders">
              <ul>
                <li className={`border ${darkMode ? "" : "lightMode"}`}>
                  Uruguai
                </li>
                <li className={`border ${darkMode ? "" : "lightMode"}`}>
                  Uruguai
                </li>
                <li className={`border ${darkMode ? "" : "lightMode"}`}>
                  Uruguai
                </li>
                <li className={`border ${darkMode ? "" : "lightMode"}`}>
                  Uruguai
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
