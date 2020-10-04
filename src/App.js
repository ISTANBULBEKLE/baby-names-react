import React from "react";
import "./App.css";
import Names from "./Names";
import SearchBar from "./SearchBar";

function App() {
  return (
    <div className="App">
      <div>
        <p className="main-p">List of Baby Girls and Boys</p>
        <SearchBar />
        <Names />
      </div>
    </div>
  );
}

export default App;
