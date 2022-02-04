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

        const togglin = darkMode ? "" : "lightMode";

        return (
          <div className="countryDetail" key={numericCode}>
            <div className="countryImage">
              <img src={flag} alt="" />
            </div>
            <div className="infos-container">
              <h2 className={`countryName ${togglin}`}>{name}</h2>
              <div className="countryInfos">
                <div className="infos1">
                  <h4 className={`textInfo ${togglin}`}>
                    Native Name: <span>{nativeName}</span>
                  </h4>
                  <h4 className={`textInfo ${togglin}`}>
                    Population: <span>{population.toLocaleString()}</span>
                  </h4>
                  <h4 className={`textInfo ${togglin}`}>
                    Region: <span>{region}</span>
                  </h4>
                  <h4 className={`textInfo ${togglin}`}>
                    Sub Region: <span>{subregion}</span>
                  </h4>
                  <h4 className={`textInfo ${togglin}`}>
                    Capital: <span>{capital}</span>
                  </h4>
                </div>
                <div className="infos2">
                  <h4 className={`textInfo ${togglin}`}>
                    Top Level Domain: <span>{topLevelDomain}</span>
                  </h4>
                  <h4 className={`textInfo ${togglin}`}>
                    Currencies: <span>{currencies[0].name}</span>
                  </h4>
                  <h4 className={`textInfo ${togglin}`}>
                    Languages: <span>{languages[0].name}</span>
                  </h4>
                </div>
              </div>
              <div className="borderCountries">
                <h4 className={`titleBorder ${togglin}`}>
                  Border Countries:
                </h4>

                {borders.map((border) => (
                  <div
                    className={`border ${togglin}`}
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
