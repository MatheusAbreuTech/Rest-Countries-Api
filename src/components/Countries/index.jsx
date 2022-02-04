import { Link } from "react-router-dom";
import { Country } from "../Country";

import "./countries.css";

export const Countries = ({ darkMode, countries, filteredPosts }) => {
  console.log(countries);
  return (
    <div className="countries">
      {filteredPosts.map((country) => (
        <Link to={`/${country.name}`} key={country.numericCode}>
          <Country darkMode={darkMode} country={country} />
        </Link>
      ))}
    </div>
  );
};
