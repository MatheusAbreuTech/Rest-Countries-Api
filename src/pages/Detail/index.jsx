import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { HiArrowNarrowLeft } from "react-icons/hi";

import "./styles.css";

export const CountryDetail = ({ darkMode }) => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://restcountries.com/v2/name/${name}`);
      const data = await response.json();
      setCountry(data);
    };

    fetchData();
  }, [name]);

  return (
    <div className="Container">
      <Link to="/" className="link">
        <button
          type="button"
          className={`btn-back ${darkMode ? "" : "lightMode"}`}>
          <HiArrowNarrowLeft className="arrowIcon" />
          Back
        </button>
      </Link>

      {country.map((c) => {
        const {
          numericCode,
          flag,
          name,
          nativeName,
          population,
          region,
          subregion,
          capital,
          topLevelDomain,
          currencies,
          languages,
          borders,
        } = c;

        return (
          <div className="countryDetail" key={numericCode}>
            <div className="countryImage">
              <img src={flag} alt="" />
            </div>
            <div className="infos-container">
              <h2 className={`countryName ${darkMode ? "" : "lightMode"}`}>
                {name}
              </h2>
              <div className="countryInfos">
                <div className="infos1">
                  <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
                    Native Name: <span>{nativeName}</span>
                  </h4>
                  <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
                    Population: <span>{population.toLocaleString()}</span>
                  </h4>
                  <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
                    Region: <span>{region}</span>
                  </h4>
                  <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
                    Sub Region: <span>{subregion}</span>
                  </h4>
                  <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
                    Capital: <span>{capital}</span>
                  </h4>
                </div>
                <div className="infos2">
                  <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
                    Top Level Domain: <span>{topLevelDomain}</span>
                  </h4>
                  <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
                    Currencies: <span>{currencies[0].name}</span>
                  </h4>
                  <h4 className={`textInfo ${darkMode ? "" : "lightMode"}`}>
                    Languages: <span>{languages[0].name}</span>
                  </h4>
                </div>
              </div>
              <div className="borderCountries">
                <h4 className={`titleBorder ${darkMode ? "" : "lightMode"}`}>
                  Border Countries:
                </h4>

                {borders.map((border) => (
                  <div
                    className={`border ${darkMode ? "" : "lightMode"}`}
                    key={border}>
                    <h4>{border}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
