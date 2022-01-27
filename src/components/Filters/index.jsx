import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import "./filters.css";

export const Filters = () => {
  return (
    <div className="Container">
      <div className="filters">
        <div className="box-search">
          <AiOutlineSearch className="icon" />
          <input
            type="text"
            className="inputSearch"
            placeholder="Search for a country..."
          />
        </div>

        <select className="filterByRegion">
          <option value="" className="optionRegion">
            teste
          </option>
        </select>
      </div>
    </div>
  );
};
