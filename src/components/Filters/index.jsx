import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import "./filters.css";

export const Filters = ({ darkMode, handleChange, searchValue, setFilter }) => {
  const togglin = darkMode ? "" : "lightMode";

  return (
    <div className="Container">
      <div className="filters">
        <div className={`box-search ${togglin} `}>
          <AiOutlineSearch className={`icon ${togglin}`} />
          <input
            type="text"
            onChange={handleChange}
            value={searchValue}
            className={`inputSearch ${togglin}`}
            placeholder="Search for a country..."
          />
        </div>

        <div className="select-box">
          <select
            className={`select ${togglin}`}
            onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="region/europe">Europa</option>
            <option value="region/americas">Americas</option>
            <option value="region/oceania">Oceania</option>
            <option value="region/asia">Asia</option>
            <option value="region/africa">Africa</option>
          </select>
        </div>
      </div>
    </div>
  );
};
