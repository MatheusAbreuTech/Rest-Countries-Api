import React, { useEffect, useState } from "react";

import { Countries } from "../../components/Countries";
import { Filters } from "../../components/Filters";

import "./styles.css";

export const Home = ({ darkMode }) => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(`https://restcountries.com/v2/${filter}`);
      const countries = await response.json();
      setCountries(countries);
    };

    fetchCountries();
  }, [filter]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const filteredPosts = searchValue
    ? countries.filter((country) => {
        return country.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    : countries;

  return (
    <div className="home">
      <Filters
        darkMode={darkMode}
        searchValue={searchValue}
        handleChange={handleChange}
        setFilter={setFilter}
      />
      <div className="countries-container Container">
        <Countries
          darkMode={darkMode}
          countries={countries}
          filteredPosts={filteredPosts}
        />
      </div>
    </div>
  );
};
