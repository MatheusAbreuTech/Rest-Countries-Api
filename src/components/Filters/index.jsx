import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import "./filters.css";

export const Filters = ({ darkMode, handleChange, searchValue, setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    {
      name: "Africa",
      desc: "Africa",
    },
    {
      name: "Americas",
      desc: "Americas",
    },
    {
      name: "Asia",
      desc: "Asia",
    },
    {
      name: "Europe",
      desc: "Europe",
    },
    {
      name: "Oceania",
      desc: "Oceania",
    },
  ];

  return (
    <div className="Container">
      <div className="filters">
        <div className={`box-search ${darkMode ? "" : "lightMode"} `}>
          <AiOutlineSearch className={`icon ${darkMode ? "" : "lightMode"}`} />
          <input
            type="text"
            onChange={handleChange}
            value={searchValue}
            className={`inputSearch ${darkMode ? "" : "lightMode"}`}
            placeholder="Search for a country..."
          />
        </div>

        <div className="select-box">
          <div className="select-items-container">
            <select name="" id="" onChange={(e) => setFilter(e.target.value)}>
              <option value="all">all</option>
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
    </div>
  );
};
