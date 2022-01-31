import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import "./filters.css";

const options = [
  {
    name: "teste1",
    id: 1,
  },
  {
    name: "teste2",
    id: 2,
  },
  {
    name: "teste3",
    id: 3,
  },
];

export const Filters = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value) => {
    const option = value.target.innerHTML;
    setSelectedOption(option);
    setIsOpen(false);
    // console.log(selectedOption);
  };

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  return (
    <div className="Container">
      <div className="filters">
        <div className={`box-search ${darkMode ? "" : "lightMode"} `}>
          <AiOutlineSearch className={`icon ${darkMode ? "" : "lightMode"}`} />
          <input
            type="text"
            className={`inputSearch ${darkMode ? "" : "lightMode"}`}
            placeholder="Search for a country..."
          />
        </div>

        <div className="select-box">
          <div
            className={`selected ${darkMode ? "" : "lightMode"}`}
            onClick={toggling}>
            {selectedOption || "Filter by Region"}
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {isOpen && (
            <div className="select-items-container">
              <div className={`items ${darkMode ? "" : "lightMode"}`}>
                {options.map((option) => (
                  <div
                    className={`listItem ${darkMode ? "" : "lightMode"}`}
                    key={option.id}>
                    <input type="radio" className="listItem" id={option.id} />
                    <label htmlFor={option.id} onClick={onOptionClicked}>
                      {option.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
