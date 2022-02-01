import React from "react";

import { Countries } from "../../components/Countries";
import { Filters } from "../../components/Filters";

import "./styles.css";

export const Home = ({ darkMode }) => {
  return (
    <div className="home">
      <Filters darkMode={darkMode} />
      <div className="countries-container Container">
        <Countries darkMode={darkMode} />
      </div>
    </div>
  );
};
