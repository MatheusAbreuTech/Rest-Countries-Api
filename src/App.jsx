import { Countries } from "./components/Countries";
import { Header } from "./components/Header";

import "./App.css";
import { Filters } from "./components/Filters";

function App() {
  return (
    <>
      <Header />
      <Filters />
      <div className="countries-container Container">
        <Countries />
      </div>
    </>
  );
}

export default App;
