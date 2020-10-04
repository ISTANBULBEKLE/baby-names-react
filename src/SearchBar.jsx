import React, { useState } from "react";
import BabyNames from "./BabyNames.json";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  function handleSearch(e) {
    setInputValue(
      BabyNames.filter(function (name) {
        return name.name.toLowerCase().includes(e.target.value);
      })
    );
    setInputValue("");
  }

  return (
    <div>
      <input
        value={inputValue}
        onChange={handleSearch}
        type="text"
        placeholder="search for baby name"
      />
    </div>
  );
};

export default SearchBar;
