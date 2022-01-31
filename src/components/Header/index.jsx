import React from "react";

import { HiOutlineMoon, HiMoon } from "react-icons/hi";

import "./header.css";

export const Header = ({ handleDarkMode, darkMode }) => {
  return (
    <div className={`header ${darkMode ? "" : "lightMode"}`}>
      <div className="Container header-item">
        <h1 className={`header-title ${darkMode ? "" : "lightMode"}`}>
          Where in the world?
        </h1>
        <div className="darkMode">
          {darkMode && (
            <>
              <HiMoon className="iconMoon" />
              <button
                type="button"
                className="btn-toggle"
                onClick={handleDarkMode}>
                Light Mode
              </button>
            </>
          )}

          {!darkMode && (
            <>
              <HiOutlineMoon />
              <button
                type="button"
                className="btn-toggle lightMode"
                onClick={handleDarkMode}>
                Dark Mode
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
