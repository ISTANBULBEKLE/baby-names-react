import React, { useState } from "react";
import "./App.css";
import Names from "./Names";
import SearchBar from "./SearchBar";
import BabyNames from "./BabyNames.json";

function App() {
  const [babyNames, setBabyNames] = useState(BabyNames);

  function handleFilter(input) {
    setBabyNames(
      BabyNames.filter((babyName) =>
        babyName.name.toLowerCase().includes(input)
      )
    );
  }

  return (
    <div className="App">
      <div>
        <p className="main-p">List of Baby Girls and Boys</p>
        <hr></hr>
        <SearchBar handleFilter={handleFilter} />
        <hr></hr>
        <Names babyNames={babyNames} />
      </div>
    </div>
  );
}

export default App;
