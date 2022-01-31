import React from "react";
import { Country } from "../Country";

import "./countries.css";

const countries = [1, 2, 3, 3, 4, 4];

export const Countries = ({ darkMode }) => {
  return (
    <div className="countries">
      {countries.map((country) => (
        <Country darkMode={darkMode} />
      ))}
    </div>
  );
};
