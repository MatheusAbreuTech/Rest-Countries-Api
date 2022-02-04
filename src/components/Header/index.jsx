import React from "react";

import { HiOutlineMoon, HiMoon } from "react-icons/hi";

import "./header.css";

export const Header = ({ handleDarkMode, darkMode }) => {
  const togglin = darkMode ? "" : "lightMode";

  return (
    <div className={`header ${togglin}`}>
      <div className="Container header-item">
        <h1 className={`header-title ${togglin}`}>Where in the world?</h1>
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
