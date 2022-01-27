import { Countries } from "./components/Countries";
import { Header } from "./components/Header";

import "./App.css";
import { Filters } from "./components/Filters";

function App() {
  return (
    <>
      <Header />
      <Filters />
      <Countries />
    </>
  );
}

export default App;
