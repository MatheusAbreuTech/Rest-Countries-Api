import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Country } from "../Country";

import "./countries.css";

export const Countries = ({ darkMode }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v2/all");
      const countries = await response.json();
      setCountries(countries);
    };

    fetchCountries();
  }, []);
  console.log(countries);
  return (
    <div className="countries">
      {countries.map((country) => (
        <Link to={`/${country.name}`} key={country.numericCode}>
          <Country darkMode={darkMode} country={country} />
        </Link>
      ))}
    </div>
  );
};
