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
            <option value="regionalbloc/EFTA">
              European Free Trade Association
            </option>
            <option value="regionalbloc/CARICOM">Caribbean Community</option>
            <option value="regionalbloc/PA">Pacific Alliance</option>
            <option value="regionalbloc/AU">African Union</option>
            <option value="regionalbloc/USAN">
              Union of South American Nations
            </option>
            <option value="regionalbloc/EEU">Eurasian Economic Union</option>
            <option value="regionalbloc/AL">Arab League</option>
            <option value="regionalbloc/ASEAN">
              Association of Southeast Asian Nations
            </option>
            <option value="regionalbloc/CAIS">
              Central American Integration System
            </option>
            <option value="regionalbloc/CEFTA">
              Central European Free Trade Agreement
            </option>
            <option value="regionalbloc/NAFTA">
              North American Free Trade Agreement
            </option>
            <option value="regionalbloc/SAARC">
              South Asian Association for Regional Cooperation
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
